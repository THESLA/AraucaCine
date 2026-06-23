// AraucaCine - main script

const sections = document.querySelectorAll('section');
const footer = document.getElementById('footer-section');
const navLinks = document.querySelectorAll('.nav-link, .footer-col a');
const navContainer = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const loader = document.getElementById('loader');
const toggleBtn = document.querySelector('.theme-toggle');

const isDesktop = () => window.innerWidth > 768;

// Hide loader on load
window.addEventListener('load', () => {
  if (loader) loader.style.display = 'none';
});
setTimeout(() => { if (loader) loader.style.display = 'none'; }, 3000);

// Theme toggle
if (toggleBtn) {
  const saved = localStorage.getItem('arauacine_theme');
  if (saved === 'light') document.body.classList.add('light');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('arauacine_theme', theme);
  });
}

hamburger.addEventListener('click', () => {
  navContainer.classList.toggle('open');
  hamburger.classList.toggle('open');
});

function setActiveNav(id) {
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.replace('#', '') === id) link.classList.add('active');
    else link.classList.remove('active');
  });
}

function showSection(id) {
  setActiveNav(id);
  if (isDesktop()) {
    sections.forEach(s => {
      if (s.id === id) {
        s.style.display = 'flex';
        s.classList.add('active');
        s.classList.remove('section-enter');
        void s.offsetHeight;
        s.classList.add('section-enter');
      } else {
        s.style.display = 'none';
        s.classList.remove('active', 'section-enter');
      }
    });
    footer.style.display = 'block';
  } else {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    footer.style.display = 'block';
  }
  navContainer.classList.remove('open');
  hamburger.classList.remove('open');
}

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').replace('#', '');
    showSection(id);
    history.pushState(null, '', '#' + id);
  });
});

document.querySelectorAll('.btn[href^="#"]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').replace('#', '');
    showSection(id);
    history.pushState(null, '', '#' + id);
  });
});

if (isDesktop()) {
  const hash = window.location.hash.replace('#', '');
  sections.forEach(s => s.style.display = 'none');
  showSection(hash || 'inicio');
}

window.addEventListener('popstate', () => {
  if (isDesktop()) {
    const hash = window.location.hash.replace('#', '');
    showSection(hash || 'inicio');
  }
});

// Ripple effect on buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.cssText =
      `position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);width:20px;height:20px;margin-left:-10px;margin-top:-10px;left:${e.clientX - rect.left}px;top:${e.clientY - rect.top}px;transform:scale(0);animation:rippleAnim 0.5s ease-out forwards;pointer-events:none;`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

// Reveal on scroll (mobile)
const revealElements = document.querySelectorAll('.about-card, .program-card, .help-card, .gallery-item');
if (!isDesktop()) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Contact form
const form = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Enviando…';
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) {
        formStatus.textContent = '✓ Mensaje enviado con éxito. Gracias por contactarnos.';
        formStatus.className = 'form-status success';
        form.reset();
      } else throw new Error('Error');
    } catch {
      formStatus.textContent = '✗ Hubo un error. Intenta de nuevo o escríbenos directamente.';
      formStatus.className = 'form-status error';
    }
    btn.disabled = false;
    btn.textContent = 'Enviar Mensaje';
  });
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

function openLightbox(index) {
  const items = Array.from(galleryItems);
  currentIndex = index;
  const img = items[currentIndex];
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  const overlay = img.parentElement.querySelector('.gallery-overlay');
  lightboxCaption.textContent = overlay ? overlay.textContent : '';
  lightbox.hidden = false;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  const items = Array.from(galleryItems);
  currentIndex = (currentIndex + direction + items.length) % items.length;
  openLightbox(currentIndex);
}

galleryItems.forEach((img, i) => img.addEventListener('click', () => openLightbox(i)));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navigateLightbox(-1);
  if (e.key === 'ArrowRight') navigateLightbox(1);
});

// Visit counter
(async function () {
  const el = document.getElementById('visitCount');
  try {
    const res = await fetch('https://api.counterapi.dev/v1/arauacine/visits/increment');
    if (res.ok) {
      const data = await res.json();
      el.textContent = data.count.toLocaleString();
      return;
    }
  } catch (e) { console.warn('Counter API failed:', e); }
  let c = parseInt(localStorage.getItem('ac_visits') || '0') + 1;
  localStorage.setItem('ac_visits', c.toString());
  el.textContent = c;
})();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
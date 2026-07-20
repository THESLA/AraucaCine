import VisitCounter from "./VisitCounter"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 shadow-inner shadow-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <img src="images/logo.png" alt="AraucaCine" className="logo-nav w-8 h-8" />
            <span className="text-sm font-semibold">AraucaCine</span>
          </div>
          <VisitCounter />
        </div>

        <div className="pt-8 pb-6 border-t border-border">
          <p className="text-center text-[10px] font-semibold text-muted tracking-widest uppercase mb-5">Construido con</p>
          <div className="flex items-center justify-center gap-5 md:gap-8">
            <a href="https://git-scm.com" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-card/40 border border-border/40 hover:bg-card hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 no-underline" title="Git">
              <GitLogo />
              <span className="text-[11px] font-semibold text-muted group-hover:text-accent transition-colors">Git</span>
            </a>
            <a href="https://opencode.ai" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-card/40 border border-border/40 hover:bg-card hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 no-underline" title="opencode">
              <OpenCodeLogo />
              <span className="text-[11px] font-semibold text-muted group-hover:text-accent transition-colors">opencode</span>
            </a>
            <a href="https://html.spec.whatwg.org" target="_blank" rel="noopener" className="group flex flex-col items-center gap-2 px-5 py-3 rounded-xl bg-card/40 border border-border/40 hover:bg-card hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 no-underline" title="HTML5">
              <Html5Logo />
              <span className="text-[11px] font-semibold text-muted group-hover:text-accent transition-colors">HTML5</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border text-xs text-muted">
          <p>&copy; 2026 AraucaCine. <strong>Asociación sin ánimo de lucro</strong> — Domicilio: Tame, Arauca, Colombia.</p>
          <p>Hecho con <span className="text-accent">♥</span> en Tame, Arauca</p>
        </div>
      </div>
    </footer>
  )
}

function GitLogo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-muted group-hover:text-[#f05030] transition-colors">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function OpenCodeLogo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-muted group-hover:text-accent transition-colors">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
    </svg>
  )
}

function Html5Logo() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="text-muted group-hover:text-[#e44d26] transition-colors">
      <path d="M1.5 0h21l-1.91 21.56L12 24 3.41 21.56 1.5 0zm17.09 4.41l-.35 3.92H8.64l.21 2.39h8.87l-.74 8.28L12 21.14l-4.98-2.14-.34-3.78h2.42l.18 2 2.72 1.18 2.72-1.18.37-3.86H6.51l-.83-9.27h12.91z"/>
    </svg>
  )
}

import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(var(--hero-overlay), var(--hero-overlay)), image-set(url('images/hero.webp') type('image/webp'), url('images/hero.jpg') type('image/jpeg')) center/cover no-repeat"
      }}>
      <div className="text-center px-4 z-10 max-w-3xl">
        <picture>
          <source srcSet="images/logo-hero.webp" type="image/webp" />
          <img src="images/logo-hero.png" alt="AraucaCine" className="logo-hero mx-auto mb-8 opacity-90" />
        </picture>
        <h1 className="sr-only">AraucaCine</h1>
        <p className="text-xl md:text-2xl text-center text-foreground/80 leading-relaxed mb-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          Asociación sin ánimo de lucro: memoria, víctimas y paz<br className="hidden md:inline" /> a través del cine y la cultura audiovisual
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="#nosotros" onClick={e => { e.preventDefault(); document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}}>Conócenos</a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#ayudar" onClick={e => { e.preventDefault(); document.getElementById('ayudar')?.scrollIntoView({ behavior: 'smooth' })}}>Quiero Ayudar</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

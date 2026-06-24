import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(0,126,255,0.95), rgba(0,80,180,0.7)), url('images/hero.jpg') center/cover no-repeat"
      }}>
      <div className="text-center px-4 z-10 max-w-3xl">
        <img src="images/logo-hero.png" alt="AraucaCine" className="logo-hero mx-auto mb-8 opacity-90" />
        <h1 className="sr-only">AraucaCine</h1>
        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
          Transformando vidas a través del cine y la cultura en Arauca
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

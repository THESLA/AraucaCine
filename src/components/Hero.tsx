import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(0,126,255,0.85), rgba(0,80,180,0.4)), url('images/hero.jpg') center/cover no-repeat"
      }}>
      <div className="text-center px-4 z-10 max-w-3xl">
        <img src="images/logo.png" alt="AraucaCine" className="w-20 h-20 mx-auto mb-8 opacity-90" />
        <h1 className="sr-only">AraucaCine</h1>
        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-10">
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

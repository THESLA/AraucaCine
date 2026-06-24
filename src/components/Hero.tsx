import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(10,8,6,0.92), rgba(20,16,12,0.6)), url('images/hero.jpg') center/cover no-repeat"
      }}>
      <div className="text-center px-4 z-10">
        <img src="images/logo.png" alt="AraucaCine" className="w-24 h-24 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
          Transformando vidas a través del cine y la cultura en Arauca
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild>
            <a href="#nosotros" onClick={e => { e.preventDefault(); document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}}>Conócenos</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#ayudar" onClick={e => { e.preventDefault(); document.getElementById('ayudar')?.scrollIntoView({ behavior: 'smooth' })}}>Quiero Ayudar</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

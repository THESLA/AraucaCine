import { Button } from "./ui/button"
import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const chars = ' .,:;i1tfLCG08@'
      const density = 4

      canvas.width = Math.floor(window.innerWidth / density)
      canvas.height = Math.floor(window.innerHeight / density)

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data

      ctx.fillStyle = '#1a1a6e'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${density}px monospace`
      ctx.textBaseline = 'top'

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4
          const r = pixels[i]
          const g = pixels[i + 1]
          const b = pixels[i + 2]
          const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255
          const charIndex = Math.floor((1 - brightness) * (chars.length - 1))
          const char = chars[charIndex]

          const hue = Math.atan2(g - 128, r - 128) * (180 / Math.PI)
          const saturation = Math.sqrt(Math.pow(r - 128, 2) + Math.pow(g - 128, 2)) / 128
          const lightness = brightness * 60 + 20

          if (saturation > 0.3) {
            ctx.fillStyle = `hsl(${hue}, ${saturation * 80}%, ${lightness}%)`
          } else {
            ctx.fillStyle = `rgba(245, 230, 200, ${brightness * 0.8 + 0.2})`
          }

          ctx.fillText(char, x * density, y * density)
        }
      }
    }
    img.src = 'images/hero.jpg'
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ imageRendering: 'pixelated' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      <div className="text-center px-4 z-10 max-w-3xl">
        <img src="images/logo-hero.png" alt="AraucaCine" className="logo-hero mx-auto mb-8 opacity-90" />
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

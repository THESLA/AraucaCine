import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState<{ type: string; msg: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement
    btn.disabled = true
    btn.textContent = 'Enviando…'
    setStatus(null)
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (res.ok) {
        setStatus({ type: 'success', msg: '✓ Mensaje enviado con éxito. Gracias por contactarnos.' })
        form.reset()
      } else throw new Error('Error')
    } catch {
      setStatus({ type: 'error', msg: '✗ Hubo un error. Intenta de nuevo o escríbenos directamente.' })
    }
    btn.disabled = false
    btn.textContent = 'Enviar Mensaje'
  }

  return (
    <section id="contacto" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contacto</h2>
        <p className="text-muted text-center mb-12">Estaremos encantados de escucharte. Escríbenos o visítanos.</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="mb-2"><strong>Email:</strong> jamesraveloc52@gmail.com</p>
            <p className="mb-2"><strong>Teléfono:</strong> 3166976348</p>
            <p className="mb-6"><strong>Dirección:</strong> Cra 30a 12 - 44 Vergel, Tame - Arauca</p>
            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com/arauacine" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover text-sm">Facebook</a>
              <a href="https://instagram.com/arauacine" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover text-sm">Instagram</a>
              <a href="https://youtube.com/@arauacine" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover text-sm">YouTube</a>
            </div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.747%2C6.445%2C-71.727%2C6.465&amp;layer=mapnik&amp;marker=6.455%2C-71.737"
              width="100%" height="220" style={{ border: "1px solid var(--color-border)", borderRadius: 6 }}
              loading="lazy" title="Cra 30a 12-44 Vergel, Tame - Arauca" />
            <p className="text-xs text-muted mt-1">
              <a href="https://www.openstreetmap.org/?mlat=6.455&amp;mlon=-71.737#map=17/6.455/-71.737" target="_blank" rel="noopener" className="text-accent">Ver mapa más grande</a>
            </p>
          </div>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mojbojgj" method="POST" className="flex flex-col gap-4">
            <div>
              <Label htmlFor="nombre">Nombre</Label>
              <Input type="text" id="nombre" name="nombre" placeholder="Ej: Juan Pérez…" required autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input type="email" id="email" name="email" placeholder="ej: correo@ejemplo.com…" required autoComplete="email" />
            </div>
            <div>
              <Label htmlFor="asunto">Asunto</Label>
              <Input type="text" id="asunto" name="asunto" placeholder="Ej: Quiero colaborar…" />
            </div>
            <div>
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje…" required />
            </div>
            {status && (
              <p className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{status.msg}</p>
            )}
            <Button type="submit">Enviar Mensaje</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

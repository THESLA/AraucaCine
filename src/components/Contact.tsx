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
    <section id="contacto" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-tight">Contacto</h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">Estaremos encantados de escucharte. Escríbenos o visítanos.</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 space-y-3">
              <p className="flex items-center gap-3 text-sm">
                <MailIcon />
                <span>jamesraveloc52@gmail.com</span>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <PhoneIcon />
                <span>3166976348</span>
              </p>
              <p className="flex items-center gap-3 text-sm">
                <MapPinIcon />
                <span>Cra 30a 12 - 44 Vergel, Tame - Arauca</span>
              </p>
            </div>
            <div className="flex gap-4 mb-8">
              <a href="https://facebook.com/arauacine" target="_blank" rel="noopener" className="text-muted hover:text-accent transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com/arauacine" target="_blank" rel="noopener" className="text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com/@arauacine" target="_blank" rel="noopener" className="text-muted hover:text-accent transition-colors" aria-label="YouTube">
                <YouTubeIcon />
              </a>
            </div>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.747%2C6.445%2C-71.727%2C6.465&amp;layer=mapnik&amp;marker=6.455%2C-71.737"
              width="100%" height="220" style={{ border: "1px solid var(--color-border)", borderRadius: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
              loading="lazy" title="Cra 30a 12-44 Vergel, Tame - Arauca" />
            <p className="text-xs text-muted mt-1.5">
              <a href="https://www.openstreetmap.org/?mlat=6.455&amp;mlon=-71.737#map=17/6.455/-71.737" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover">Ver mapa más grande</a>
            </p>
          </div>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mojbojgj" method="POST" className="flex flex-col gap-5">
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

function MailIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> }
function PhoneIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> }
function MapPinIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> }
function FacebookIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> }
function InstagramIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> }
function YouTubeIcon() { return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> }

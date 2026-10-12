import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink } from "lucide-react"

const TIKTOK_ID = "7695778986407906580"
const TIKTOK_URL = `https://www.tiktok.com/@araucacine/video/${TIKTOK_ID}`

const fotos = [
  {
    src: "images/taller-saravena/taller-1.jpg",
    alt: "Espacio del taller con cámara profesional, trípode y equipo de sonido",
    caption: "Montaje del equipo técnico del taller",
  },
  {
    src: "images/taller-saravena/taller-2.jpg",
    alt: "Participante en una mesa junto al facilitador durante la entrevista",
    caption: "Inscripción y entrevista de los participantes",
  },
  {
    src: "images/taller-saravena/taller-3.jpg",
    alt: "Joven participante conversando con el facilitador del taller",
    caption: "Registro de los jóvenes del grupo juvenil",
  },
  {
    src: "images/taller-saravena/taller-4.jpg",
    alt: "Rodaje al aire libre con los jóvenes como actores y equipo técnico",
    caption: "Rodaje: los participantes como actores de Ahora Soy Feliz",
  },
  {
    src: "images/taller-saravena/taller-5.jpg",
    alt: "Grupo de participantes con el facilitador en la comunidad rural",
    caption: "El taller llegó hasta la comunidad en la vereda",
  },
  {
    src: "images/taller-saravena/taller-6.jpg",
    alt: "Función de cine al aire libre de noche con la comunidad reunida",
    caption: "Cierre con cine al aire libre para toda la comunidad",
  },
  {
    src: "images/taller-saravena/taller-7.jpg",
    alt: "Equipo del cortometraje reunido al final de la jornada",
    caption: "El equipo del cortometraje al final de la jornada",
  },
]

const chips = ["4 días", "Saravena, Arauca", "Cortometraje", "7 fotos"]

export default function TallerSaravena({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [idx, setIdx] = useState<number | null>(null)

  const cerrar = useCallback(() => {
    setIdx(null)
    onOpenChange(false)
  }, [onOpenChange])

  const prev = useCallback(() => {
    setIdx(i => (i !== null ? (i - 1 + fotos.length) % fotos.length : null))
  }, [])

  const next = useCallback(() => {
    setIdx(i => (i !== null ? (i + 1) % fotos.length : null))
  }, [])

  const volver = useCallback(() => setIdx(null), [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
      else if (e.key === "ArrowRight") { e.preventDefault(); next() }
      else if (e.key === "Escape") {
        e.preventDefault()
        if (idx !== null) volver()
        else cerrar()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, idx, prev, next, volver, cerrar])

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) cerrar() }}>
      <DialogContent className="max-w-4xl bg-background/95 border-border max-h-[88vh] overflow-y-auto p-4 md:p-6">
        {idx === null ? (
          <>
            <div className="pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ahora Soy Feliz
              </h3>
              <p className="text-xs font-medium text-accent mb-4">
                Taller Audiovisual · Saravena, Arauca
              </p>
              <p className="text-sm text-muted leading-relaxed text-justify mb-5">
                El grupo juvenil y los campistas juveniles de Saravena filaron su
                propio cortometraje durante cuatro días de cámaras, actores y trabajo
                en equipo. La jornada cerró con una función de cine al aire libre
                abierta a toda la comunidad.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {chips.map(c => (
                  <span
                    key={c}
                    className="text-[11px] font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-[325px_1fr] gap-6 items-start mb-8">
              <div className="w-full max-w-[325px] mx-auto">
                <div className="rounded-xl overflow-hidden border border-border bg-black">
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${TIKTOK_ID}`}
                    width="325"
                    height="720"
                    title="Ahora Soy Feliz — cortometraje de AraucaCine"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                    className="w-full block"
                  />
                </div>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors mt-2 no-underline"
                >
                  Ver el cortometraje en TikTok
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-5">
                <h4 className="text-sm font-semibold text-foreground mb-2">
                  Una producción de
                </h4>
                <ul className="text-sm text-muted leading-relaxed space-y-1.5">
                  <li>AraucaCine</li>
                  <li>Gobernación de Arauca</li>
                  <li>Jóvenes Campistas de Saravena</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-sm font-semibold text-foreground mb-4">
                Las 7 fotos del taller
              </h4>
              <div className="flex flex-col gap-5">
                {fotos.map((f, i) => (
                  <figure key={i} className="m-0">
                    <button
                      onClick={() => setIdx(i)}
                      className="w-full block rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-colors cursor-pointer bg-transparent p-0"
                      aria-label={`Ampliar: ${f.caption}`}
                    >
                      <img
                        src={f.src}
                        alt={f.alt}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </button>
                    <figcaption className="text-xs text-muted mt-2 text-center">
                      {f.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div>
            <button
              onClick={volver}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer bg-transparent border-none mb-3"
            >
              <ArrowLeft size={14} />
              Volver a las 7 fotos
            </button>
            <div className="relative flex items-center justify-center">
              <button
                onClick={prev}
                className="absolute left-0 z-10 text-foreground/70 hover:text-foreground text-3xl cursor-pointer bg-transparent border-none p-2"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={28} />
              </button>
              <img
                src={fotos[idx].src}
                alt={fotos[idx].alt}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
              <button
                onClick={next}
                className="absolute right-0 z-10 text-foreground/70 hover:text-foreground text-3xl cursor-pointer bg-transparent border-none p-2"
                aria-label="Foto siguiente"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            <p className="text-center text-sm text-muted mt-3 pb-1">
              {fotos[idx].caption}
              <span className="text-muted/60">
                {" "}· {idx + 1}/{fotos.length}
              </span>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
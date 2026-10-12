import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent } from "./ui/dialog"
import { ChevronLeft, ChevronRight, ArrowLeft, Play } from "lucide-react"

const TIKTOK_URL = "https://www.tiktok.com/@araucacine/video/7695778986407906580"

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
    alt: "Fotografía grupal del grupo de freestyle del municipio de Saravena",
    caption: "Fotografía con el grupo de freestyle del municipio de Saravena",
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
      <DialogContent className="max-w-5xl bg-background/95 border-border max-h-[88vh] overflow-y-auto p-0 [&>button]:bg-muted [&>button]:rounded-full [&>button]:p-2 [&>button]:right-4 [&>button]:top-4">
        {idx === null ? (
          <>
            <div className="relative overflow-hidden">
              <img
                src="images/taller-saravena/taller-4.jpg"
                alt="Rodaje de Ahora Soy Feliz con los jóvenes de Saravena"
                width={1200}
                height={800}
                className="w-full h-72 md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/90 via-background/40 to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-center gap-2.5 px-5 py-4">
                <img
                  src="images/logo.png"
                  alt="AraucaCine"
                  className="logo-nav h-9 w-9 shrink-0"
                />
                <div className="min-w-0">
                  <span
                    className="block text-foreground text-xl font-bold leading-none truncate"
                    style={{ fontFamily: "'Arial Black', 'Arial Nova', Arial, sans-serif" }}
                  >
                    AraucaCine
                  </span>
                  <span className="block text-[10px] text-muted leading-none mt-0.5">
                    Memoria, víctimas y paz
                  </span>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 px-5 pb-6 pt-20 md:px-8 md:pb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent mb-2">
                  Taller Audiovisual · Saravena, Arauca
                </p>
                <h3 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-tight">
                  Ahora Soy Feliz
                </h3>
              </div>
            </div>

            <div className="p-5 md:p-8">
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

              <p className="text-sm md:text-base text-muted leading-relaxed text-justify mb-8">
                El grupo juvenil y los campistas juveniles de Saravena filaron su
                propio cortometraje durante cuatro días de cámaras, actores y trabajo
                en equipo. La jornada cerró con una función de cine al aire libre
                abierta a toda la comunidad.
              </p>

              <div className="grid md:grid-cols-2 gap-5 items-start mb-10">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-xl overflow-hidden border border-border hover:border-accent/60 transition-colors no-underline"
                  aria-label="Ver el cortometraje Ahora Soy Feliz en TikTok"
                >
                  <img
                    src="images/taller-saravena/taller-6.jpg"
                    alt="Función de cine al aire libre de Ahora Soy Feliz"
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-background/45 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-accent text-background text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg group-hover:scale-105 transition-transform">
                      <Play size={15} fill="currentColor" />
                      Ver el cortometraje
                    </span>
                  </div>
                  <span className="absolute bottom-0 inset-x-0 px-4 py-3 text-left text-xs text-foreground/90 bg-gradient-to-t from-background/90 to-transparent">
                    Cortometraje completo · Ahora Soy Feliz
                  </span>
                </a>

                <div className="bg-card border border-border rounded-xl p-5 h-fit">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Una producción de
                  </h4>
                  <ul className="text-sm text-muted leading-relaxed space-y-1.5 mb-5">
                  <li>AraucaCine</li>
                  <li>Jóvenes Campistas de Saravena</li>
                </ul>
                <p className="text-xs text-muted/70 border-t border-border pt-4 leading-relaxed">
                  Taller de 4 días en Saravena, Arauca. La jornada cerró con una
                  función de cine al aire libre abierta a toda la comunidad.
                </p>
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
            </div>
          </>
        ) : (
          <div className="p-5 md:p-6">
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
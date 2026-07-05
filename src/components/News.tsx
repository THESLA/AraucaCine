import { useState } from "react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { Share2, X } from "lucide-react"
import Footer from "./Footer"

const news = [
  {
    img: "images/0101.png",
    date: "4 Julio 2026",
    title: "Acompañamos al jurado Vortex Creativo en un casting",
    excerpt: "Estuvimos junto al jurado Vortex Creativo en las jornadas de casting para un nuevo proyecto. Una experiencia enriquecedora que refuerza el talento audiovisual local."
  },
  {
    img: "images/noche.jpg",
    date: "1 Julio 2026",
    title: "Taller de Sonido y Video de Calle: capturando la esencia de Arauca",
    excerpt: "Salimos a las calles con micrófonos y cámaras para grabar el sonido ambiente, el murmullo de la gente y el ritmo cotidiano de Arauca. Una experiencia práctica de producción audiovisual comunitaria."
  },
  {
    img: "images/gallery3.jpg",
    date: "15 Junio 2026",
    title: "Taller de Producción Audiovisual llegó a 50 jóvenes",
    excerpt: "Durante dos semanas, jóvenes de Tame y Arauquita aprendieron guion, dirección y edición como herramientas de expresión y transformación social."
  },
  {
    img: "images/prog1.jpg",
    date: "28 Mayo 2026",
    title: "Cine Comunitario en Caño Limón: una noche mágica",
    excerpt: "Más de 200 personas disfrutaron de una función al aire libre en la vereda Caño Limón, llevando el séptimo arte a comunidades de difícil acceso."
  },
  {
    img: "images/gallery5.jpg",
    date: "10 Mayo 2026",
    title: "Convocatoria abierta: Festival de Cine Orinoquía 2026",
    excerpt: "Invitamos a realizadores locales e independientes a postular sus cortometrajes y documentales para la cuarta edición de nuestro festival anual."
  }
]

const SITE_URL = "https://THESLA.github.io/AraucaCine/#/noticias"

function encode(text: string) {
  return encodeURIComponent(text)
}

export default function News() {
  const navigate = useNavigate()
  const [sharePopupIndex, setSharePopupIndex] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const handleShare = async (item: typeof news[number], index: number) => {
    const fullTitle = `AraucaCine — ${item.title}`
    const shareUrl = SITE_URL

    // En móvil: usa la API nativa de compartir → abre WhatsApp, Instagram, Facebook, etc.
    if (navigator.share) {
      try {
        await navigator.share({ title: fullTitle, text: item.excerpt, url: shareUrl })
        return
      } catch (err) {
        // Si el usuario canceló, no hacer nada. Si falló de verdad, mostramos el popup.
        if ((err as Error).name !== "AbortError") {
          setSharePopupIndex(index)
        }
        return
      }
    }

    // En desktop: muestra el popup con enlaces directos
    setSharePopupIndex(index)
  }

  const closePopup = () => {
    setSharePopupIndex(null)
    setCopied(false)
  }

  const copyLink = (item: typeof news[number]) => {
    const text = `AraucaCine — ${item.title}\n\n${item.excerpt}\n\n${SITE_URL}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
    <section id="noticias" className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Noticias</h2>
            <p className="text-muted mt-2">Línea de tiempo de nuestras actividades</p>
          </div>
          <Button variant="secondary" onClick={() => { navigate("/"); window.scrollTo({ top: 0 }) }}>
            ← Volver
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent via-accent/60 to-accent/20 md:-translate-x-px" />

          {news.map((item, i) => {
            const left = i % 2 === 0
            const isLast = i === news.length - 1
            return (
              <div key={item.title} className={`relative flex items-start mb-16 last:mb-0 ${left ? "" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 pl-14 md:pl-0 ${left ? "md:pr-14" : "md:pl-14"}`}>
                  <div className={`relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 ${left ? "md:text-right" : ""}`}>
                    <div className={`hidden md:block absolute top-6 w-4 h-0.5 bg-accent/40 ${left ? "right-0 translate-x-full" : "left-0 -translate-x-full"}`} />
                    <img src={item.img} alt={item.title} width={600} height={400} loading="lazy"
                      className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <span className="inline-block text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-2">{item.date}</span>
                      <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-3">{item.excerpt}</p>

                      <div className="relative">
                        <button onClick={() => handleShare(item, i)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-accent hover:text-accent/80 transition-colors cursor-pointer bg-transparent border-none">
                          <Share2 size={14} />
                          Compartir
                        </button>

                        {sharePopupIndex === i && (
                          <div className="absolute bottom-full left-0 md:left-auto md:right-0 mb-2 z-20 bg-card border border-border rounded-xl shadow-xl p-4 min-w-[200px]">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-semibold text-foreground">Compartir en</span>
                              <button onClick={closePopup} className="text-muted hover:text-foreground cursor-pointer bg-transparent border-none">
                                <X size={14} />
                              </button>
                            </div>
                            <div className="flex flex-col gap-2">
                              {/* WhatsApp */}
                              <a href={`https://api.whatsapp.com/send?text=${encode(`AraucaCine — ${item.title}\n\n${item.excerpt}\n\n${SITE_URL}`)}`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg px-3 py-2 transition-colors no-underline">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-green-500"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                WhatsApp
                              </a>

                              {/* Facebook */}
                              <a href={`https://www.facebook.com/sharer/sharer.php?quote=${encode(`AraucaCine — ${item.title}`)}&u=${encode(SITE_URL)}`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg px-3 py-2 transition-colors no-underline">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-600"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                Facebook
                              </a>

                              {/* Twitter / X */}
                              <a href={`https://twitter.com/intent/tweet?text=${encode(`AraucaCine — ${item.title}`)}&url=${encode(SITE_URL)}`}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg px-3 py-2 transition-colors no-underline">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-foreground"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                X (Twitter)
                              </a>

                              {/* Copiar enlace */}
                              <button onClick={() => copyLink(item)}
                                className="flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg px-3 py-2 transition-colors cursor-pointer border-none text-left">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-accent"><path d="M7.24 2h9.52c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C20 3.52 20 4.08 20 5.2v13.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C18.48 22 17.92 22 16.8 22H7.24c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C4 20.48 4 19.92 4 18.8V5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C5.56 2 6.12 2 7.24 2z"/></svg>
                                {copied ? "¡Copiado!" : "Copiar enlace"}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-[46px] h-[46px] rounded-full bg-background border-[3px] border-accent flex items-center justify-center shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-accent" style={{ animationDuration: "2s" }} />
                </div>

                {!isLast && (
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -bottom-8 items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent/40">
                      <path d="M8 12L3 4h10L8 12z" fill="currentColor" />
                    </svg>
                  </div>
                )}

                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>

        <div className="relative mt-16 mb-20 bg-card/50 border border-border rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          <div className="relative p-8 md:p-12 text-center">
            <span className="inline-block text-[10px] font-bold text-accent bg-accent/10 px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Cronología</span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Nuestra Trayectoria</h3>
            <p className="text-muted text-sm max-w-xl mx-auto mb-8">
              Desde nuestros inicios, cada año ha sido una oportunidad para llevar el cine y la cultura a más comunidades de Arauca.
            </p>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-accent">2016</span>
                <span className="text-[10px] text-muted tracking-widest uppercase">Inicio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

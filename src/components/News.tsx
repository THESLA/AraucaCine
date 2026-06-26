import { Button } from "./ui/button"

const news = [
  {
    img: "images/gallery1.jpg",
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

interface NewsProps {
  setPage: (p: "main" | "noticias") => void
}

export default function News({ setPage }: NewsProps) {
  return (
    <section id="noticias" className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Noticias</h2>
            <p className="text-muted mt-2">Línea de tiempo de nuestras actividades</p>
          </div>
          <Button variant="secondary" onClick={() => { setPage("main"); window.scrollTo({ top: 0 }) }}>
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
                      <p className="text-sm text-muted leading-relaxed mb-4">{item.excerpt}</p>
                      <Button variant="secondary" size="sm">Leer más</Button>
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
      </div>
    </section>
  )
}

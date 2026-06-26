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
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 md:-translate-x-px" />

          {news.map((item, i) => {
            const left = i % 2 === 0
            return (
              <div key={item.title} className="relative flex items-start mb-12 last:mb-0">
                <div className={`flex-1 pl-12 md:pl-0 ${left ? "md:pr-10" : "md:pl-10"}`}>
                  <div className={`bg-card border border-border rounded-xl overflow-hidden hover:border-accent/30 transition-colors ${left ? "md:text-right" : ""}`}>
                    <img src={item.img} alt={item.title} width={600} height={400} loading="lazy"
                      className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <p className="text-xs text-muted mb-2">{item.date}</p>
                      <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">{item.excerpt}</p>
                      <Button variant="secondary" size="sm">Leer más</Button>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-10 h-10 rounded-full bg-background border-2 border-accent flex items-center justify-center shrink-0 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

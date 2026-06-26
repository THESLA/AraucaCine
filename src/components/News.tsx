import { Card } from "./ui/card"
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

export default function News() {
  return (
    <section id="noticias" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Noticias</h2>
        <p className="text-muted mb-12 max-w-2xl mx-auto">
          Entérate de nuestras actividades, logros y próximos eventos.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {news.map(item => (
            <Card key={item.title} className="overflow-hidden hover:border-accent/30 transition-colors">
              <img src={item.img} alt={item.title} width={600} height={400} loading="lazy"
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-muted mb-2">{item.date}</p>
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{item.excerpt}</p>
                <Button variant="secondary" size="sm">Leer más</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

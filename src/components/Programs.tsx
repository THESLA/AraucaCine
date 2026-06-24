import { Card } from "./ui/card"

const programs = [
  {
    img: "images/prog1.jpg",
    icon: "🎞️",
    title: "Cine Comunitario",
    text: "Funciones de cine gratuitas en barrios y veredas, llevando la magia del séptimo arte a comunidades con acceso limitado a salas de cine."
  },
  {
    img: "images/prog2.jpg",
    icon: "📹",
    title: "Talleres Audiovisuales",
    text: "Capacitación en producción audiovisual para jóvenes, enseñando guion, dirección, fotografía y edición como herramienta de expresión."
  },
  {
    img: "images/prog3.jpg",
    icon: "🏷️",
    title: "Festival de Cine",
    text: "Festival anual de cine independiente y documental que da visibilidad a realizadores locales e historias de la región de la Orinoquía."
  },
  {
    img: "images/prog4.jpg",
    icon: "📚",
    title: "Formación Escolar",
    text: "Programa educativo en escuelas públicas que utiliza el cine como herramienta pedagógica para fortalecer habilidades socioemocionales."
  }
]

export default function Programs() {
  return (
    <section id="programas" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Programas</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {programs.map(p => (
            <Card key={p.title} className="overflow-hidden text-left">
              <div className="h-48 bg-cover bg-center" style={{
                background: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${p.img}') center/cover`
              }}>
                <div className="flex items-center justify-center h-full">
                  <span className="text-4xl" aria-hidden="true">{p.icon}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-muted text-sm">{p.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

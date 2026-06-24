import { Card } from "./ui/card"

const programs = [
  {
    img: "images/prog1.jpg",
    title: "Cine Comunitario",
    text: "Funciones de cine gratuitas en barrios y veredas, llevando la magia del séptimo arte a comunidades con acceso limitado a salas de cine."
  },
  {
    img: "images/prog2.jpg",
    title: "Talleres Audiovisuales",
    text: "Capacitación en producción audiovisual para jóvenes, enseñando guion, dirección, fotografía y edición como herramienta de expresión."
  },
  {
    img: "images/prog3.jpg",
    title: "Festival de Cine",
    text: "Festival anual de cine independiente y documental que da visibilidad a realizadores locales e historias de la región de la Orinoquía."
  },
  {
    img: "images/prog4.jpg",
    title: "Formación Escolar",
    text: "Programa educativo en escuelas públicas que utiliza el cine como herramienta pedagógica para fortalecer habilidades socioemocionales."
  }
]

export default function Programs() {
  return (
    <section id="programas" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Nuestros Programas</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {programs.map(p => (
            <div key={p.title} className="group flex gap-5 items-start p-5 rounded-xl hover:bg-card transition-colors duration-300 -mx-5">
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-cover bg-center"
                style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('${p.img}') center/cover` }}
              />
              <div>
                <h3 className="text-lg font-semibold mb-1.5 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

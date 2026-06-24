import { Card } from "./ui/card"

const items = [
  {
    icon: "🎬",
    title: "Misión",
    text: "Democratizar el acceso al cine y la cultura audiovisual en comunidades vulnerables de Arauca, fomentando la creatividad, el pensamiento crítico y la cohesión social."
  },
  {
    icon: "🌌",
    title: "Visión",
    text: "Ser la organización cultural líder en la región de la Orinoquía, reconocida por su impacto social a través del cine comunitario y la formación audiovisual."
  },
  {
    icon: "❤️",
    title: "Valores",
    text: "Inclusión, creatividad, respeto, solidaridad, compromiso social y sostenibilidad cultural en cada proyecto que emprendemos."
  }
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Sobre Nosotros</h2>
        <p className="text-muted text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Somos una organización sin fines de lucro dedicada a promover el acceso al cine y las artes audiovisuales como herramientas de transformación social en el departamento de Arauca, Colombia.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <Card key={i.title} className="p-8 text-left hover:border-accent/30 transition-colors">
              <div className="text-3xl mb-4" aria-hidden="true">{i.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{i.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{i.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from "./ui/card"

const items = [
  {
    icon: "🎬",
    title: "Misión",
    text: "Fomentar, promover y desarrollar la cultura cinematográfica y audiovisual en Tame, Arauca, Colombia y el mundo, con especial énfasis en la reconstrucción de la memoria histórica, la visibilización de las víctimas del conflicto armado, la prevención de nuevas violencias y la construcción de paz, a través de la formación, producción, difusión e investigación audiovisual comunitaria."
  },
  {
    icon: "🌌",
    title: "Visión",
    text: "Ser una organización referente en la región de la Orinoquía y en Colombia en el uso del cine y el audiovisual como herramientas de memoria, reconciliación y transformación social, con proyección nacional e internacional, y con un profundo arraigo en las comunidades de nuestro departamento."
  },
  {
    icon: "❤️",
    title: "Valores",
    text: "Memoria y verdad, solidaridad con las víctimas del conflicto armado, inclusión comunitaria, ética y responsabilidad social, compromiso con la paz y los derechos humanos, diálogo intergeneracional y respeto por la diversidad cultural."
  }
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Sobre Nosotros</h2>
        <p className="text-muted text-base md:text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          Somos una <strong>asociación sin ánimo de lucro</strong> con domicilio en el municipio de <strong>Tame, departamento de Arauca, Colombia</strong>, constituida para fomentar la cultura cinematográfica y audiovisual como herramienta de memoria histórica, visibilización de las víctimas del conflicto armado, prevención de violencias y construcción de paz.
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

import { Card } from "./ui/card"
import { Button } from "./ui/button"

const items = [
  {
    icon: "💰",
    title: "Donación",
    text: "Tus donaciones nos permiten comprar equipos, transportar proyectores y llegar a más comunidades."
  },
  {
    icon: "🤝",
    title: "Voluntariado",
    text: "Únete como voluntario en nuestros talleres, funciones y eventos. No necesitas experiencia previa."
  },
  {
    icon: "🚀",
    title: "Aliados",
    text: "Si representas una organización o empresa, podemos desarrollar proyectos conjuntos de impacto cultural."
  }
]

export default function Help() {
  return (
    <section id="ayudar" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo Ayudar</h2>
        <p className="text-muted max-w-2xl mx-auto mb-12">
          Tu apoyo hace posible que sigamos transformando vidas a través del cine y la cultura.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(i => (
            <Card key={i.title} className="p-8 text-center">
              <div className="text-4xl mb-4" aria-hidden="true">{i.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{i.title}</h3>
              <p className="text-muted text-sm mb-6">{i.text}</p>
              <Button variant="default">{i.title === "Donación" ? "Donar Ahora" : i.title === "Voluntariado" ? "Ser Voluntario" : "Ser Aliado"}</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

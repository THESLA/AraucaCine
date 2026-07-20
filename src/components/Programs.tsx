const programs = [
  {
    img: "images/prog1.jpg",
    title: "Cine Comunitario",
    text: "Funciones de cine gratuitas en barrios y veredas, llevando la magia del séptimo arte a comunidades con acceso limitado a salas de cine, priorizando espacios de integración cultural y convivencia."
  },
  {
    img: "images/prog2.jpg",
    title: "Talleres Audiovisuales",
    text: "Capacitación en producción audiovisual para jóvenes, comunidades rurales y víctimas del conflicto, enseñando guion, dirección, fotografía y edición como herramientas de expresión y reconstrucción del tejido social."
  },
  {
    img: "images/prog3.jpg",
    title: "Festival de Cine",
    text: "Festival anual de cine independiente y documental que da visibilidad a realizadores locales e historias de la región de la Orinoquía, con énfasis en derechos humanos, memoria y paz."
  },
  {
    img: "images/prog4.jpg",
    title: "Formación Escolar",
    text: "Programa educativo en escuelas públicas que utiliza el cine como herramienta pedagógica para fortalecer habilidades socioemocionales, el diálogo intergeneracional y la convivencia."
  },
  {
    img: "images/gallery5.jpg",
    title: "Memoria y Paz",
    text: "Proyectos de investigación, producción y preservación de archivos audiovisuales que rescatan la memoria histórica, visibilizan a las víctimas del conflicto armado y promueven la reconciliación y la no repetición en el departamento de Arauca."
  }
]

export default function Programs() {
  return (
    <section id="programas" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Nuestros Programas</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
          {programs.map(p => (
            <div key={p.title} className="group flex gap-3 items-start p-2.5 rounded-xl bg-card hover:bg-card/70 hover:shadow-md hover:shadow-black/10 transition-all duration-300">
              <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-cover bg-center shadow-md shadow-black/15"
                style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('${p.img}') center/cover` }}
              />
              <div>
                <h3 className="text-base font-semibold mb-1 text-accent group-hover:text-muted transition-colors">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center tracking-tight">Nuestros Programas</h2>
        <p className="text-muted text-center mb-16 max-w-2xl mx-auto">
          Transformamos vidas a través del cine y la cultura en cada rincón de Arauca
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {programs.map((p, i) => (
            <div key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[280px] p-6">
                <span className="inline-block text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-3 w-fit">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

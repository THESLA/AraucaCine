import { useState } from "react"
import { Dialog, DialogContent } from "./ui/dialog"

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `images/gallery${i + 1}.jpg`,
  alt: [
    "Taller de Producción 2025 - participantes aprendiendo edición",
    "Función de cine comunitario en Caño Limón al aire libre",
    "Festival de Cine Orinoquía 2025 presentación",
    "Taller escolar en Arauquita niños aprendiendo cine",
    "Taller de Guion Creativo con jóvenes",
    "Función de cine al aire libre en el Parque Arauca"
  ][i],
  caption: [
    "Taller de Producción 2025",
    "Cine Comunitario en Caño Limón",
    "Festival de Cine Orinoquía 2025",
    "Taller escolar en Arauquita",
    "Taller de Guion Creativo",
    "Cine al Aire Libre - Parque Arauca"
  ][i]
}))

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null)

  const open = (i: number) => setIdx(i)
  const close = () => setIdx(null)
  const prev = () => setIdx(i => i !== null ? (i - 1 + images.length) % images.length : null)
  const next = () => setIdx(i => i !== null ? (i + 1) % images.length : null)

  return (
    <section id="galeria" className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Galería</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={() => open(i)}>
              <img src={img.src} alt={img.alt} width={600} height={400} loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <span className="text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={idx !== null} onOpenChange={v => !v && close()}>
        <DialogContent className="max-w-4xl bg-black/95 border-border p-2">
          {idx !== null && (
            <div className="relative flex items-center justify-center">
              <button onClick={prev} className="absolute left-2 z-10 text-white/80 hover:text-white text-3xl cursor-pointer" aria-label="Anterior">‹</button>
              <img src={images[idx].src} alt={images[idx].alt} className="max-h-[80vh] w-auto object-contain rounded" />
              <button onClick={next} className="absolute right-2 z-10 text-white/80 hover:text-white text-3xl cursor-pointer" aria-label="Siguiente">›</button>
            </div>
          )}
          {idx !== null && (
            <p className="text-center text-sm text-white/70 pb-1">{images[idx].caption}</p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

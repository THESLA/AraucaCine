import { Play } from "lucide-react"

const TIKTOK_PERFIL = "https://www.tiktok.com/@araucacine"

/**
 * Videos destacados de TikTok.
 * TikTok ya no permite incrustar su reproductor de forma fiable
 * (devuelve 429/503 y muestra "overload-protect triggered"),
 * por eso cada tarjeta abre el video directamente en TikTok.
 *
 * Para agregar uno: nuevo id unico, titulo, nota y url del video.
 * La imagen es opcional; sin ella se muestra un bloque con el titulo.
 */
const videos = [
  {
    id: "ahora-soy-feliz",
    img: "images/taller-saravena/taller-6.jpg",
    title: "Ahora Soy Feliz",
    note: "Cortometraje · Taller de Saravena",
    url: "https://www.tiktok.com/@araucacine/video/7695778986407906580",
  },
]

export default function Videos() {
  return (
    <section id="videos" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Videos</h2>
          <p className="text-muted mb-8">Síguenos en TikTok para más contenido</p>
          <a
            href={TIKTOK_PERFIL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-background text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity no-underline"
          >
            <Play size={15} fill="currentColor" />
            @araucacine en TikTok
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {videos.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-accent/50 transition-colors no-underline text-left"
            >
              {v.img ? (
                <div className="relative overflow-hidden">
                  <img
                    src={v.img}
                    alt={v.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-accent text-background rounded-full p-3">
                      <Play size={18} fill="currentColor" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-card to-accent/20 flex items-center justify-center">
                  <span className="bg-accent text-background rounded-full p-4">
                    <Play size={20} fill="currentColor" />
                  </span>
                </div>
              )}

              <div className="p-4">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="text-xs text-muted mt-1">{v.note}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent mt-3">
                  Ver en TikTok
                  <Play size={10} fill="currentColor" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
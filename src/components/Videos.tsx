export default function Videos() {
  return (
    <section id="videos" className="py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Videos</h2>
        <p className="text-muted mb-8">Síguenos en TikTok para más contenido</p>
        <div className="max-w-2xl mx-auto">
          <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@araucacine" data-unique-id="araucacine" data-embed-type="creator"
            style={{ maxWidth: 780, minWidth: 288, margin: "0 auto" }}>
            <section>
              <a target="_blank" href="https://www.tiktok.com/@araucacine?refer=creator_embed">@araucacine</a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </div>
    </section>
  )
}

import VisitCounter from "./VisitCounter"

const techs = [
  { name: "React", url: "https://react.dev", color: "#58c4dc", desc: "Biblioteca de UI", logo: "react" },
  { name: "TypeScript", url: "https://www.typescriptlang.org", color: "#3178c6", desc: "Tipado seguro", logo: "typescript" },
  { name: "Vite", url: "https://vite.dev", color: "#646cff", desc: "Build tool", logo: "vite" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com", color: "#06b6d4", desc: "Framework de estilos", logo: "tailwind" },
  { name: "Git", url: "https://git-scm.com", color: "#f05030", desc: "Control de versiones", logo: "git" },
  { name: "GitHub Pages", url: "https://pages.github.com", color: "#ffffff", desc: "Hosting", logo: "github" },
  { name: "Node.js", url: "https://nodejs.org", color: "#5fa04e", desc: "Entorno de ejecución", logo: "nodejs" },
  { name: "opencode", url: "https://opencode.ai", color: "#ffffff", desc: "Asistente IA", logo: "opencode" },
  { name: "HTML5", url: "https://html.spec.whatwg.org", color: "#e44d26", desc: "Lenguaje de marcado", logo: "html5" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 shadow-inner shadow-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <img src="images/logo.png" alt="AraucaCine" className="logo-nav w-8 h-8" />
            <span className="text-sm font-semibold">AraucaCine</span>
          </div>
          <VisitCounter />
        </div>

        <div className="pt-8 pb-6 border-t border-border">
          <p className="text-center text-[10px] font-semibold text-muted tracking-[0.2em] uppercase mb-6">Tecnologías que impulsan AraucaCine</p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {techs.map(t => (
              <a key={t.name} href={t.url} target="_blank" rel="noopener"
                className="tech-card group flex flex-col items-center gap-1 px-2.5 py-3 rounded-xl bg-card/40 border border-border/40 hover:bg-card hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 no-underline"
                style={{ '--brand': t.color } as React.CSSProperties}>
                <TechLogo name={t.logo} />
                <span className="text-[10px] font-semibold text-muted group-hover:text-[var(--brand)] transition-colors">{t.name}</span>
                <span className="text-[8px] text-muted/50 group-hover:text-muted/70 transition-colors -mt-0.5">{t.desc}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-border text-xs text-muted">
          <p>&copy; 2026 AraucaCine. <strong>Asociación sin ánimo de lucro</strong> — Domicilio: Tame, Arauca, Colombia.</p>
          <p>Hecho con <span className="text-accent">♥</span> en Tame, Arauca</p>
        </div>
      </div>
    </footer>
  )
}

const svgCls = "w-6 h-6 text-muted group-hover:text-[var(--brand)] transition-colors"

function TechLogo({ name }: { name: string }) {
  switch (name) {
    case "react":
      return (
        <svg viewBox="-11.5 -10.232 23 20.463" width="28" height="28" fill="currentColor" className={svgCls}>
          <circle r="2.05" fill="currentColor" />
          <g stroke="currentColor" fill="none" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M3 3h18v18H3V3zm10.08 14.19c0 .96.34 1.54 1.33 1.54.53 0 .97-.22 1.33-.74l.96.67c-.61.9-1.5 1.35-2.47 1.35-1.5 0-2.46-.85-2.46-2.37 0-1.47.96-2.37 2.65-2.37.2 0 .4.02.59.05V13.3c0-.67-.32-.97-1.05-.97-.53 0-1.05.23-1.43.69l-.82-.77c.57-.75 1.37-1.14 2.44-1.14 1.56 0 2.5.78 2.5 2.33v3.75h-1.17v-.93zm-3.85-6.99h-3.8v9.76H7.2v-9.76h3.03v-1.2z"/>
        </svg>
      )
    case "vite":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M12 2L2 19.5h8.5L12 22l1.5-2.5H22L12 2zm0 4.04l5.77 10.46h-2.93L12 13.5l-2.84 3H6.23L12 6.04z"/>
        </svg>
      )
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M12 4c-4 0-6 2.5-6 5 2 0 3.5-1 4.5-2 .6-.7 1.2-1.5 2.5-1.5 2.5 0 4 1.5 4 4 0 1.5-.5 2.8-1.5 4-1 1.2-2 2.5-2 4 0 1.5.6 2.5 2 3 2 0 3.5-1 4.5-2 1-1 1.5-2.5 1.5-4 0-1.5-.5-2.8-1.5-4-1-1.2-2-2.5-2-4 0-1.5.6-2.5 2-3 2 0 3.5 1 4.5 2 1 1 1.5 2.5 1.5 4 0 1.5-.5 2.8-1.5 4-1 1.2-2 2.5-2 4 0 1.5.6 2.5 2 3 2 0 3.5-1 4.5-2a8 8 0 001.5-2c.3-.7.5-1.5.5-2 0-1.5-.5-2.8-1.5-4-1-1.2-2-2.5-2-4 0-1.5.6-2.5 2-3 2 0 3.5 1 4.5 2a8 8 0 011.5 2c.3.7.5 1.5.5 2 0 1.5-.5 2.8-1.5 4-1 1.2-2 2.5-2 4 0 1.5.6 2.5 2 3a2 2 0 002-1.5c.2-.5 0-1-.5-2-.4-.7-1-1.5-1-3s.5-2 1.5-2c1 0 1.5.5 1.5 1.5"/>
        </svg>
      )
    case "git":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case "github":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    case "nodejs":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M11.435 0c-.222 0-.44.058-.635.174L1.546 5.41c-.39.226-.624.633-.624 1.073v10.604c0 .44.234.847.624 1.073l9.254 5.236c.39.226.878.226 1.27 0l9.254-5.236c.39-.226.624-.633.624-1.073V6.483c0-.44-.234-.847-.624-1.073L12.07.174C11.876.058 11.656 0 11.435 0zm0 1.252c.072 0 .145.019.21.058l8.691 4.916c.13.074.21.212.21.363v9.83c0 .15-.08.288-.21.363l-8.691 4.916c-.13.074-.29.074-.42 0l-8.691-4.916c-.13-.075-.21-.213-.21-.364V6.589c0-.15.08-.288.21-.363l8.691-4.916c.065-.039.138-.058.21-.058zm-.076 2.437a.42.42 0 00-.103.014c-.565.147-2.614.802-4.23 1.62-.692.35-1.019.56-1.224.832-.261.346-.261.773-.261 1.163v2.066c0 .184.096.354.252.45l1.385.8c.156.09.252.26.252.45v1.638c0 .19.096.36.252.45l.647.373c.156.09.252.26.252.45v2.68c0 .39.153.644.414.843.26.2.671.279 1.034.279.644 0 1.082-.332 1.082-.978v-4.483c0-.304-.153-.598-.414-.747l-1.436-.83v-1.677c0-.15-.055-.298-.155-.414l-2.023-2.768 3.713-1.432c.108-.042.186-.143.186-.259V6.756c0-.19-.097-.36-.253-.45l-1.567-.9a.437.437 0 00-.205-.058zm5.786 0c-.158 0-.316.04-.46.118l-1.72.975c-.13.074-.21.212-.21.363v5.607c0 1.212-.59 1.83-1.78 2.362-.53.237-1.155.472-1.56.688-.36.19-.545.481-.545.83v.932c0 .35.186.665.545.81l3.339 1.928c.286.166.633.166.92 0l2.72-1.572c.286-.165.544-.48.544-.83V7.457c0-.348-.186-.663-.544-.81l-2.69-1.554a.472.472 0 00-.46-.117z"/>
        </svg>
      )
    case "opencode":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
        </svg>
      )
    case "html5":
      return (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={svgCls}>
          <path d="M1.5 0h21l-1.91 21.56L12 24 3.41 21.56 1.5 0zm17.09 4.41l-.35 3.92H8.64l.21 2.39h8.87l-.74 8.28L12 21.14l-4.98-2.14-.34-3.78h2.42l.18 2 2.72 1.18 2.72-1.18.37-3.86H6.51l-.83-9.27h12.91z"/>
        </svg>
      )
    default:
      return null
  }
}

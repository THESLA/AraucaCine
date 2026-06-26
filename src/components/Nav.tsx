import { Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#programas", label: "Programas" },
  { href: "#galeria", label: "Galería" },
  { href: "#videos", label: "Videos" },
  { href: "#noticias", label: "Noticias" },
  { href: "#ayudar", label: "Cómo Ayudar" },
  { href: "#contacto", label: "Contacto" },
]

interface NavProps {
  page: "main" | "noticias"
  setPage: (p: "main" | "noticias") => void
}

export default function Nav({ page, setPage }: NavProps) {
  const [open, setOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace("#", "")

    if (id === "noticias") {
      setPage("noticias")
      history.pushState(null, "", href)
    } else {
      if (page === "noticias") setPage("main")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50)
      history.pushState(null, "", href)
    }
  }

  const handleLogo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    setPage("main")
    window.scrollTo({ top: 0, behavior: "smooth" })
    history.pushState(null, "", "#inicio")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/10">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" onClick={handleLogo} className="flex items-center gap-2">
          <img src="images/logo.png" alt="AraucaCine" className="logo-nav h-10 w-10" />
          <div>
            <span className="text-foreground text-[1.45rem] font-bold" style={{ fontFamily: "'Arial Black', 'Arial Nova', Arial, sans-serif" }}>AraucaCine</span>
            <span className="block text-[10px] text-muted leading-none -mt-0.5">{__COMMIT_HASH__}</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleClick(e, l.href)}
              className={`nav-underline text-sm nav-hover transition-colors ${l.label === "Noticias" ? "shake-link" : "text-foreground/80"}`}
              style={l.label === "Noticias" ? { color: "#FCC600" } : undefined}
              onMouseEnter={l.label === "Noticias" ? e => (e.currentTarget as HTMLElement).style.color = "#FCC600" : undefined}
              onMouseLeave={l.label === "Noticias" ? e => (e.currentTarget as HTMLElement).style.color = "#FCC600" : undefined}>
              {l.label}{l.label === "Noticias" && <span className="alert-dot" />}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground cursor-pointer" aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-3 shadow-lg shadow-black/10">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleClick(e, l.href)}
              className={`text-sm nav-hover transition-colors ${l.label === "Noticias" ? "shake-link" : "text-foreground/80"}`}
              style={l.label === "Noticias" ? { color: "#FCC600" } : undefined}
              onMouseEnter={l.label === "Noticias" ? e => (e.currentTarget as HTMLElement).style.color = "#FCC600" : undefined}
              onMouseLeave={l.label === "Noticias" ? e => (e.currentTarget as HTMLElement).style.color = "#FCC600" : undefined}>
              {l.label}{l.label === "Noticias" && <span className="alert-dot" />}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

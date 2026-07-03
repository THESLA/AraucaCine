import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#programas", label: "Programas" },
  { href: "#galeria", label: "Galería" },
  { href: "#videos", label: "Videos" },
  { href: "#noticias", label: "Noticias", isRoute: true },
  { href: "#ayudar", label: "Cómo Ayudar" },
  { href: "#contacto", label: "Contacto" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace("#", "")

    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const handleLogo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      navigate("/")
    }
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
          {links.map(l =>
            l.isRoute ? (
              <Link key={l.href} to="/noticias"
                className="text-sm shake-link transition-all duration-300 hover:scale-110"
                style={{ color: "#FCC600" }}
                onClick={() => setOpen(false)}>
                {l.label}<span className="alert-dot" />
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={e => handleSectionClick(e, l.href)}
                className="nav-underline text-sm text-foreground/80 nav-hover transition-colors">
                {l.label}
              </a>
            )
          )}
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
          {links.map(l =>
            l.isRoute ? (
              <Link key={l.href} to="/noticias"
                className="text-sm shake-link transition-all duration-300 hover:scale-110"
                style={{ color: "#FCC600" }}
                onClick={() => setOpen(false)}>
                {l.label}<span className="alert-dot" />
              </Link>
            ) : (
              <a key={l.href} href={l.href} onClick={e => handleSectionClick(e, l.href)}
                className="text-sm text-foreground/80 nav-hover transition-colors">
                {l.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  )
}

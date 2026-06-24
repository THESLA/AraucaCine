import { Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#programas", label: "Programas" },
  { href: "#galeria", label: "Galería" },
  { href: "#videos", label: "Videos" },
  { href: "#ayudar", label: "Cómo Ayudar" },
  { href: "#contacto", label: "Contacto" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    history.pushState(null, "", href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#inicio" onClick={e => handleClick(e, "#inicio")}>
          <img src="images/logo.png" alt="AraucaCine" className="h-10 w-10" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleClick(e, l.href)}
              className="text-sm text-foreground/80 hover:text-accent transition-colors">
              {l.label}
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
        <div className="md:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleClick(e, l.href)}
              className="text-sm text-foreground/80 hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

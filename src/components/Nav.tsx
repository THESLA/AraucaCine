import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { MagneticButton } from "./ui/magnetic-button"

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "programas", label: "Programas" },
  { id: "galeria", label: "Galería" },
  { id: "videos", label: "Videos" },
  { id: "noticias", label: "Noticias" },
  { id: "ayudar", label: "Cómo Ayudar" },
  { id: "contacto", label: "Contacto" },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionClick = (id: string) => {
    setOpen(false)
    if (location.pathname === "/") {
      scrollToSection(id)
    } else {
      navigate("/")
      setTimeout(() => scrollToSection(id), 100)
    }
  }

  const handleLogo = () => {
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
        <button onClick={handleLogo} className="flex items-center gap-2 cursor-pointer text-left bg-transparent border-none">
          <img src="images/logo.png" alt="AraucaCine" className="logo-nav h-10 w-10" />
          <div>
            <span className="text-foreground text-[1.45rem] font-bold" style={{ fontFamily: "'Arial Black', 'Arial Nova', Arial, sans-serif" }}>AraucaCine</span>
            <span className="block text-[10px] text-muted leading-none -mt-0.5">{__COMMIT_HASH__}</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {sections.map(s =>
            s.id === "noticias" ? (
              <MagneticButton key={s.id}>
                <button onClick={() => handleSectionClick(s.id)}
                  className="text-sm shake-link transition-all duration-300 hover:scale-110 cursor-pointer bg-transparent border-none"
                  style={{ color: "#FCC600" }}>
                  {s.label}<span className="alert-dot" />
                </button>
              </MagneticButton>
            ) : (
              <button key={s.id} onClick={() => handleSectionClick(s.id)}
                className="nav-underline text-sm text-foreground/80 nav-hover transition-colors cursor-pointer bg-transparent border-none">
                {s.label}
              </button>
            )
          )}
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground cursor-pointer bg-transparent border-none" aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 py-4 flex flex-col gap-3 shadow-lg shadow-black/10">
          {sections.map(s =>
            s.id === "noticias" ? (
              <MagneticButton key={s.id}>
                <button onClick={() => handleSectionClick(s.id)}
                  className="text-sm shake-link transition-all duration-300 hover:scale-110 cursor-pointer bg-transparent border-none"
                  style={{ color: "#FCC600" }}>
                  {s.label}<span className="alert-dot" />
                </button>
              </MagneticButton>
            ) : (
              <button key={s.id} onClick={() => handleSectionClick(s.id)}
                className="text-sm text-foreground/80 nav-hover transition-colors text-left cursor-pointer bg-transparent border-none">
                {s.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  )
}

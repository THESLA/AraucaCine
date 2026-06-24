import VisitCounter from "./VisitCounter"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <img src="images/logo.png" alt="AraucaCine" className="logo-nav w-8 h-8" />
            <span className="text-sm font-semibold">AraucaCine</span>
          </div>
          <VisitCounter />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border text-xs text-muted">
          <p>&copy; 2026 AraucaCine. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-accent">♥</span> en Tame, Arauca</p>
        </div>
      </div>
    </footer>
  )
}

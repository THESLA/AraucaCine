import VisitCounter from "./VisitCounter"

export default function Footer() {
  return (
    <footer className="border-t border-border py-4 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-muted">
        <p>&copy; 2026 AraucaCine. Todos los derechos reservados.</p>
        <VisitCounter />
      </div>
    </footer>
  )
}

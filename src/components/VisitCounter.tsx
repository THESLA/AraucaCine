import { useVisitCounter } from "@/hooks/useVisitCounter"

export default function VisitCounter() {
  const count = useVisitCounter()
  return (
    <div className="flex items-center gap-1.5 bg-card border border-border rounded-full px-3 py-1">
      <span className="text-xs" aria-hidden="true">👁</span>
      <span className="text-xs font-medium">{count}</span>
      <span className="text-xs text-muted">visitas</span>
    </div>
  )
}

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/hooks/useTheme"

export default function ThemeToggle() {
  const { isLight, toggle } = useTheme()
  return (
    <button onClick={toggle} className="text-foreground/80 hover:text-accent transition-colors cursor-pointer" aria-label="Cambiar tema">
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}

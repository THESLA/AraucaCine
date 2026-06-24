import { useState, useEffect } from 'react'

export function useTheme() {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('arauacine_theme') === 'light'
    }
    return false
  })

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
    document.documentElement.classList.toggle('light', isLight)
    localStorage.setItem('arauacine_theme', isLight ? 'light' : 'dark')
  }, [isLight])

  const toggle = () => setIsLight(v => !v)

  return { isLight, toggle }
}

import { useState, useEffect } from 'react'

export function useVisitCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://countapi.mileshilliard.com/api/v1/hit/arauacine-visits')
        if (res.ok) {
          const data = await res.json()
          setCount(Number(data.value))
          return
        }
      } catch {}
      let c = parseInt(localStorage.getItem('ac_visits') || '0') + 1
      localStorage.setItem('ac_visits', c.toString())
      setCount(c)
    })()
  }, [])

  return count
}

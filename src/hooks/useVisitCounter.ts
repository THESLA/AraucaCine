import { useState, useEffect } from 'react'

const VISIT_KEY = 'ac_visits'
const VISIT_API = 'https://countapi.mileshilliard.com/api/v1/hit/arauacine-visits'

export function useVisitCounter() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(VISIT_API, {
          signal: AbortSignal.timeout(3000)
        })
        if (res.ok) {
          const data = await res.json()
          setCount(Number(data.value))
          return
        }
      } catch {}
      // Fallback: incrementar localmente si CountAPI no responde
      let c = parseInt(localStorage.getItem(VISIT_KEY) || '0') + 1
      localStorage.setItem(VISIT_KEY, c.toString())
      setCount(c)
    })()
  }, [])

  return count
}

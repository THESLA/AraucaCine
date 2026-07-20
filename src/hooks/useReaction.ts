import { useState, useEffect, useCallback } from 'react'

const API_BASE = 'https://countapi.mileshilliard.com/api/v1'

function key(newsIndex: number, reaction: string) {
  return `arauacine-news-${newsIndex}-${reaction}`
}

export function useReaction(newsIndex: number, reaction: string) {
  const [count, setCount] = useState(0)
  const [reacted, setReacted] = useState(false)
  const storageKey = `ac_reacted_${newsIndex}_${reaction}`

  useEffect(() => {
    setReacted(localStorage.getItem(storageKey) === '1')
  }, [storageKey])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/get/${key(newsIndex, reaction)}`)
        if (res.ok) {
          const data = await res.json()
          setCount(Number(data.value))
        }
      } catch {}
    })()
  }, [newsIndex, reaction])

  const toggle = useCallback(async () => {
    if (reacted) return
    try {
      const res = await fetch(`${API_BASE}/hit/${key(newsIndex, reaction)}`, { method: 'POST' })
      if (res.ok) {
        const data = await res.json()
        setCount(Number(data.value))
        localStorage.setItem(storageKey, '1')
        setReacted(true)
      }
    } catch {}
  }, [reacted, newsIndex, reaction, storageKey])

  return { count, reacted, toggle }
}

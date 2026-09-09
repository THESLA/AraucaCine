import { useState, useEffect, useCallback } from 'react'

const API_BASE = 'https://countapi.mileshilliard.com/api/v1'

function key(newsId: string, reaction: string) {
  return `arauacine-news-${newsId}-${reaction}`
}

function storageCountKey(newsId: string, reaction: string) {
  return `ac_count_${newsId}_${reaction}`
}

export function useReaction(newsId: string, reaction: string) {
  const [count, setCount] = useState(0)
  const [reacted, setReacted] = useState(false)
  const storageKey = `ac_reacted_${newsId}_${reaction}`

  useEffect(() => {
    setReacted(localStorage.getItem(storageKey) === '1')
  }, [storageKey])

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/get/${key(newsId, reaction)}`, {
          signal: AbortSignal.timeout(3000)
        })
        if (res.ok) {
          const data = await res.json()
          setCount(Number(data.value))
          return
        }
      } catch {}
      // Fallback: usar localStorage si CountAPI no responde
      const local = parseInt(localStorage.getItem(storageCountKey(newsId, reaction)) || '0')
      setCount(local)
    })()
  }, [newsId, reaction])

  const toggle = useCallback(async () => {
    if (reacted) return
    try {
      const res = await fetch(`${API_BASE}/hit/${key(newsId, reaction)}`, {
        method: 'POST',
        signal: AbortSignal.timeout(3000)
      })
      if (res.ok) {
        const data = await res.json()
        setCount(Number(data.value))
        localStorage.setItem(storageKey, '1')
        setReacted(true)
        return
      }
    } catch {}
    // Fallback: incrementar localmente si CountAPI no responde
    const current = parseInt(localStorage.getItem(storageCountKey(newsId, reaction)) || '0')
    const next = current + 1
    localStorage.setItem(storageCountKey(newsId, reaction), next.toString())
    setCount(next)
    localStorage.setItem(storageKey, '1')
    setReacted(true)
  }, [reacted, newsId, reaction, storageKey])

  return { count, reacted, toggle }
}

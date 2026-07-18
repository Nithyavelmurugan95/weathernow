import { useState, useEffect } from 'react'

const STORAGE_KEY = 'weathernow_search_history'
const MAX_HISTORY = 5

export function useSearchHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setHistory(JSON.parse(stored))
      } catch {
        setHistory([])
      }
    }
  }, [])

  const addToHistory = (city) => {
    setHistory((prev) => {
      const withoutDuplicate = prev.filter(
        (item) => item.toLowerCase() !== city.toLowerCase()
      )
      const updated = [city, ...withoutDuplicate].slice(0, MAX_HISTORY)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      return updated
    })
  }

  const clearHistory = () => {
    localStorage.removeItem(STORAGE_KEY)
    setHistory([])
  }

  return { history, addToHistory, clearHistory }
}
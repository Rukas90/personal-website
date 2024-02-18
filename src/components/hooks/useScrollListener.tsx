import { useCallback, useEffect, useRef } from "react"

type Subscriber = (scrollPosition: number) => void

const useScrollListener = () => {
  const subscribers = useRef<Set<Subscriber>>(new Set())

  const notifySubscribers = useCallback(() => {
    const scrollPosition = window.scrollY
    subscribers.current.forEach((subscriber) => subscriber(scrollPosition))
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", notifySubscribers, { passive: true })

    return () => {
      window.removeEventListener("scroll", notifySubscribers)
    }
  }, [notifySubscribers])

  const subscribe = useCallback((callback: Subscriber) => {
    subscribers.current.add(callback)

    return () => {
      subscribers.current.delete(callback)
    }
  }, [])

  return { subscribe }
}

export default useScrollListener

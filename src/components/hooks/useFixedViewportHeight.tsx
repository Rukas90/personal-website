import { useEffect, useRef } from "react"

export function useFixedViewportHeight() {
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const setVh = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  const update = () => {
    clear()
    timeout.current = setTimeout(setVh, 1000)
  }
  const clear = () => {
    if (timeout.current === null) {
      return
    }
    clearTimeout(timeout.current)
    timeout.current = null
  }
  useEffect(() => {
    setVh()
    update()

    window.addEventListener("orientationchange", update)

    return () => {
      window.removeEventListener("orientationchange", update)
    }
  }, [])
}

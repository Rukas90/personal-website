import { useCallback, useEffect, useState } from "react"
import useScrollListener from "./useScrollListener"

const useScrollPassedThreshold = (threshold: number): boolean => {
  const [isPassed, setIsPassed] = useState(false)
  const { subscribe } = useScrollListener()

  const checkScrollPassedThreshold = useCallback(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop
    setIsPassed(scrollY >= threshold)
  }, [threshold])

  useEffect(() => {
    const unsubscribe = subscribe(checkScrollPassedThreshold)

    checkScrollPassedThreshold()

    return () => unsubscribe()
  }, [subscribe, checkScrollPassedThreshold])

  return isPassed
}

export default useScrollPassedThreshold

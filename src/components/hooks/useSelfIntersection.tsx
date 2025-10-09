import { useEffect, useState } from "react"

export type IntersectionChangeData = {
  isIntersecting: boolean
  observed: boolean
}
export type IntersectionChangeCallback = (
  settings: IntersectionChangeData
) => void

const useSelfIntersection = (
  target: React.MutableRefObject<Element | null>,
  callback: IntersectionChangeCallback,
  margin?: string,
  threshold?: number
) => {
  const [observed, setObserved] = useState(false)
  const [intersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!target.current) {
      return
    }
    const observer = new IntersectionObserver(
      (entities) => {
        const entity = entities[0]

        if (!entity) {
          return
        }
        setIntersecting(entity.isIntersecting)
        setObserved((current) => {
          return current || entity.isIntersecting
        })
        callback({
          isIntersecting: entity.isIntersecting,
          observed: observed,
        })
      },
      {
        rootMargin: margin,
        threshold: threshold,
      }
    )
    observer.observe(target.current)

    return () => {
      if (!target.current) {
        return
      }
      observer.unobserve(target.current)
      observer.disconnect()
    }
  }, [target.current, margin, callback])

  return { intersecting, observed }
}
export default useSelfIntersection

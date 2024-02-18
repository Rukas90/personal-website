import { useEffect, RefObject, useRef } from "react"
import useScrollListener from "./useScrollListener"

const useElementReveal = (
  ref: RefObject<HTMLElement>,
  threshold: number = 0
): void => {
  const isVisible = useRef<boolean | null>(null)
  const lastScroll = useRef<number>(0)
  const { subscribe } = useScrollListener()

  useEffect(() => {
    const updateVisibilityAndDirection = () => {
      const currentScrollY = window.scrollY
      const scrollDirection =
        currentScrollY > lastScroll.current ? "down" : "up"

      lastScroll.current = currentScrollY

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()

        const visible =
          rect.top + threshold < window.innerHeight &&
          rect.bottom - threshold > 0

        if (visible) {
          ref.current.classList.add("visiblevisible")
        } else {
          ref.current.classList.remove("visiblevisible")
        }

        if (isVisible.current === visible) {
          return
        }
        isVisible.current = visible

        ref.current.classList.toggle(
          "reveal-up",
          isVisible && scrollDirection === "up"
        )
        ref.current.classList.toggle(
          "reveal-down",
          isVisible && scrollDirection === "down"
        )

        if (scrollDirection === "up") {
          ref.current.classList.remove("reveal-down")
        } else {
          ref.current.classList.remove("reveal-up")
        }
      }
    }
    const unsubscribe = subscribe(updateVisibilityAndDirection)

    updateVisibilityAndDirection()

    return () => unsubscribe()
  }, [ref, threshold])
}

export default useElementReveal

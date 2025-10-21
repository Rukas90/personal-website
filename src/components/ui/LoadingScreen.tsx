import React, { useEffect, useRef } from "react"

const LoadingScreen = () => {
  const initialized = useRef<boolean>(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (initialized.current) {
      return
    }
    if (rootRef.current === null) {
        return
    }
    initialized.current = true

    let timeout = setTimeout(() => {
        rootRef.current!.classList.add('fade-out')

        timeout = setTimeout(() => {
            rootRef.current!.classList.add('hidden')
            clearTimeout(timeout)
        }, 325);

    }, 750)

  }, [])

  return (
    <div ref={rootRef} className="z-50 fixed top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-950" />
  )
}
export default LoadingScreen

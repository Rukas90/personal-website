import React, { useEffect, useState } from "react"
import Arrow from "img/misc/arrow-up.svg"

const BackToTop = () => {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", toggle)

    return () => {
      window.removeEventListener("scroll", toggle)
    }
  }, [])
  const toggle = () => {
    const scrollThreshold = 250

    const scrollY = window.scrollY || document.documentElement.scrollTop

    setVisible(scrollY >= scrollThreshold)
  }

  const scroll = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <div
      className={`back-to-top-btn absolute bottom-10 left-10 ${
        !isVisible && "inactive"
      } transition-transform`}
    >
      <button
        onClick={scroll}
        className="interactable p-10 hover:-translate-y-2 transition-transform pointer-events-auto"
      >
        <img src={Arrow} className="pointer-events-none mix-blend-exclusion" />
      </button>
    </div>
  )
}
export default BackToTop

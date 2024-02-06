import React, { useState, useEffect } from "react"

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [isVisible, setIsVisible] = useState(true)

  const size = 10.0

  const updateMousePosition = (e: any) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const targetScale = parseFloat(
        window.getComputedStyle(e.target).getPropertyValue("--cursor-scale")
      )
      setScale(targetScale)
    })
  }

  const handleMouseEnter = (_: any) => setIsVisible(true)
  const handleMouseLeave = (_: any) => setIsVisible(false)

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const cursorStyle = {
    transform: `translate(${mousePosition.x - (size * scale) / 2}px, ${
      mousePosition.y - (size * scale) / 2
    }px)`,
    width: `${size * scale}px`,
    height: `${size * scale}px`,
    transition:
      "transform 0.1s ease-out, width 0.1s ease-out, height 0.1s ease-out",
    willChange: "transform, width, height",
    display: isVisible ? "block" : "none",
  }

  return (
    <div
      className="fixed z-50 left-0 top-0 rounded-full backdrop-saturate-0 bg-white mix-blend-difference pointer-events-none"
      style={cursorStyle}
    />
  )
}

export default Cursor

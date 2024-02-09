import React, { useEffect, useState } from "react"
import Arrow from "img/misc/arrow-up.svg"
import IconButton from "src/components/ui/buttons/IconButton"
import ArrowUpIcon from "src/components/ui/images/misc/ArrowUpIcon"

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
    const newState = scrollY >= scrollThreshold

    setVisible((_) => {
      return newState
    })
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
      <IconButton
        icon={<ArrowUpIcon />}
        className="p-0 2xl:p-10 hover:-translate-y-2"
        onClick={scroll}
      />
    </div>
  )
}
export default BackToTop

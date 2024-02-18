import React from "react"
import useScrollPassedThreshold from "src/components/hooks/useScrollPassedThreshold"
import IconButton from "src/components/ui/buttons/IconButton"
import ArrowUpIcon from "src/components/ui/images/misc/ArrowUpIcon"
import { SCROLL_DOWN_THRESHOLD } from "src/utils/Constants"

const BackToTop = () => {
  const isVisible = useScrollPassedThreshold(SCROLL_DOWN_THRESHOLD)

  const scrollBackUp = () => {
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
        className="p-10 hover:-translate-y-2"
        onClick={scrollBackUp}
      />
    </div>
  )
}
export default BackToTop

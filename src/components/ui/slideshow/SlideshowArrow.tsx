import React from "react"
import ArrowIcon from "../images/misc/ArrowIcon"

interface Props {
  isLeft?: boolean
  onClick?: () => void
}

const SlideshowArrow = ({ isLeft, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`interactable h-full w-1/4 transition-opacity ${
        isLeft ? "bg-gradient-to-l" : "bg-gradient-to-r"
      } from-gray-200 hover:opacity-15 opacity-0 pointer-events-auto`}
    >
      <div
        className={`my-auto w-16 pointer-events-none ${
          isLeft ? "rotate-90 ms-auto" : "-rotate-90"
        }`}
      >
        <ArrowIcon fill="black" />
      </div>
    </button>
  )
}
export default SlideshowArrow

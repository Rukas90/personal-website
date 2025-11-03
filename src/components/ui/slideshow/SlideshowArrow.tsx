import React from "react"
import ArrowUpIcon from "../images/misc/ArrowUpIcon"

interface Props {
  isLeft?: boolean
  onClick?: () => void
}

const SlideshowArrow = ({ isLeft, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`interactable h-10 my-auto w-1/4 transition-opacity from-gray-200 hover:opacity-85 opacity-50 pointer-events-auto`}
    >
      <div
        className={`my-auto w-16 pointer-events-none ${
          isLeft ? "rotate-90 ms-auto" : "-rotate-90"
        }`}
      >
        <ArrowUpIcon fill="black" />
      </div>
    </button>
  )
}
export default SlideshowArrow

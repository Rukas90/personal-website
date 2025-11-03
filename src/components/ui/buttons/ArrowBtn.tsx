import React from "react"
import ArrowUpIcon from "../images/misc/ArrowUpIcon"
import { GeneralProps } from "src/components/props/GeneralProps"

interface Props extends GeneralProps {
  isLeft?: boolean
  onClick?: () => void
}

const ArrowBtn = ({ isLeft, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className} interactable my-auto transition-opacity from-gray-200 hover:opacity-50 opacity-15 pointer-events-auto`}
    >
      <div
        className={`my-auto w-16 pointer-events-none ${
          isLeft ? "rotate-90 ms-auto" : "-rotate-90"
        }`}
      >
        <ArrowUpIcon fill="white" />
      </div>
    </button>
  )
}
export default ArrowBtn

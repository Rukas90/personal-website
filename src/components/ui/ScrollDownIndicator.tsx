import React from "react"
import { GeneralProps } from "../props/GeneralProps"

const ScrollDownIndicator = ({ className }: GeneralProps) => {
  return (
    <div
      id="scroll-down-indicator"
      className={`relative flex flex-col items-center py-2 w-5 h-8 border-2 border-gray-500 rounded-full ${className}`}
    >
      <div className="line bg-gray-500"></div>
      <div className="dot w-2 h-2 dark:bg-gray-200 bg-black rounded-full mx-auto"></div>
    </div>
  )
}
export default ScrollDownIndicator

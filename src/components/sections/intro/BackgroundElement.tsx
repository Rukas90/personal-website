import React from "react"

const BackgroundElement = () => {
  return (
    <div className="pointer-events-none -z-10 absolute rotate-45 w-[10000px] h-[10000px] opacity-25 dark:opacity-50 bg-gray-200 dark:bg-[var(--primary-body-color)] top-[-10000px] left-[-5000px]" />
  )
}
export default BackgroundElement

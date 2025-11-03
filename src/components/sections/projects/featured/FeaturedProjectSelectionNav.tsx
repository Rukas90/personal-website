import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"
import IconButton from "src/components/ui/buttons/IconButton"
import ArrowNextIcon from "src/components/ui/images/misc/ArrowNextIcon"
import ArrowPrevIcon from "src/components/ui/images/misc/ArrowPrevIcon"

interface Props extends GeneralProps {
  filesCount: number
  setIndex: (index: number) => void
  viewingIndex: number
}

const FeaturedProjectSelectionNav = ({
  filesCount,
  setIndex,
  viewingIndex,
  className
}: Props) => {
  return (
    <div className={`${className} w-1/2 max-w-full mx-auto px-12`}>
      <div className="w-full flex flex-row justify-between">
        <IconButton
          icon={<ArrowPrevIcon />}
          className="hover:-translate-x-2 hover:scale-150"
          onClick={() => setIndex(viewingIndex - 1)}
        />
        <ul className="flex justify-center">
          {Array.from({ length: filesCount }, (_, index) => (
            <li
              onClick={() => setIndex(index)}
              key={index}
              className="p-3 interactable"
            >
              <div
                className={`${
                  viewingIndex === index ? "dark:bg-teal-400 bg-red-600" : ""
                } border-2 dark:border-teal-400 border-red-600 w-4 h-4 rounded-full pointer-events-none`}
              />
            </li>
          ))}
        </ul>
        <IconButton
          icon={<ArrowNextIcon />}
          className="hover:translate-x-2 hover:scale-150"
          onClick={() => setIndex(viewingIndex + 1)}
        />
      </div>
    </div>
  )
}
export default FeaturedProjectSelectionNav

import React from "react"

interface Props {
  filesCount: number
  setIndex: (index: number) => void
  viewingIndex: number
}

const FeaturedProjectSelectionNav = ({
  filesCount,
  setIndex,
  viewingIndex,
}: Props) => {
  return (
    <div className="xl:w-1/2 w-full">
      <ul className="w-full flex justify-center">
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
    </div>
  )
}
export default FeaturedProjectSelectionNav

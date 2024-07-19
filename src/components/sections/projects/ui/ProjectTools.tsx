import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"

interface Props extends SkeletonProps, GeneralProps {
  tools: string[]
}

const ProjectTools = ({ showSkeleton, tools, className }: Props) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      <span className="font-semibold text-nowrap dark:text-teal-400 text-red-600">
        Built using:
      </span>
      {showSkeleton ? (
        <RectangleSkeleton className="w-24 h-4 self-center" />
      ) : (
        <ul className="flex flex-wrap gap-2 dark:text-gray-300 text-black dark:font-normal font-medium">
          {tools.map((tool, index) => (
            <li
              className="fade-in"
              style={{ animationDelay: `${0.025 * index}s` }}
              key={`Tool_${index}`}
            >{`${tool}${index < tools.length - 1 ? ", " : ""}`}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default ProjectTools

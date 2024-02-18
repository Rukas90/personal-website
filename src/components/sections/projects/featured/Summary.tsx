import Markdown from "markdown-to-jsx"
import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"

interface Props extends SkeletonProps {
  summary: string
}

const Summary = ({ showSkeleton, summary }: Props) => {
  return (
    <div className="py-4 dark:font-light text-sm text-justify">
      {showSkeleton ? (
        <div className="space-y-3">
          <RectangleSkeleton className="w-1/2 h-4" />
          <RectangleSkeleton className="w-1/4 h-4" />
          <div className="space-y-3">
            <RectangleSkeleton className="w-1/3 h-4 mt-8" />
            <RectangleSkeleton className="w-full h-4" />
          </div>
        </div>
      ) : (
        <div className="fade-in">
          <Markdown>{summary || ""}</Markdown>
        </div>
      )}
    </div>
  )
}
export default Summary

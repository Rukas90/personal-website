import Markdown from "markdown-to-jsx"
import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"

interface Props extends SkeletonProps {
  summary: string
}

const FeaturedProjectSummary = ({ showSkeleton, summary }: Props) => {
  return (
    <div className="tn:py-4 pb-6 dark:font-light tn:text-sm text-xs tn:text-justify tn:tracking-wider tracking-widest">
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
          <ParagraphBlock className="tn:text-sm text-xs tn:text-start text-center">
            <Markdown>{summary || ""}</Markdown>
          </ParagraphBlock>
        </div>
      )}
    </div>
  )
}
export default FeaturedProjectSummary

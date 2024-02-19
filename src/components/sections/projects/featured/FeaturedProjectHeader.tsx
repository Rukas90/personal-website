import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import TypingText from "src/components/ui/TypingText"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"

interface Props extends SkeletonProps {
  title: string
  subtitle: string
  index: number
}

const FeaturedProjectHeader = ({
  showSkeleton,
  title,
  subtitle,
  index,
}: Props) => {
  return (
    <>
      {showSkeleton ? (
        <RectangleSkeleton className="w-1/4 h-4" />
      ) : (
        <p className="dark:text-gray-400 text-gray-800 dark:font-normal font-medium fade-down pb-1">
          {subtitle}
        </p>
      )}
      {showSkeleton ? (
        <RectangleSkeleton className="w-full h-8" />
      ) : (
        <TypingText
          sharedSentenceClasses="text-4xl"
          sentences={[
            {
              text: `${index}. `,
              className: "font-light dark:text-teal-400 text-red-600",
              inline: true,
              pause: 0.1,
            },
            {
              text: title,
              inline: true,
              pause: 0.35,
              className: "font-semibold",
            },
          ]}
        />
      )}
    </>
  )
}
export default FeaturedProjectHeader

import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import TypingText from "src/components/ui/TypingText"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"
import { paddedNumber } from "src/utils/FormattingUtils"

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
        <p className="dark:text-gray-400 tn:mx-0 mx-auto text-gray-800 dark:font-normal font-medium fade-down tn:pb-1 tn:text-base text-sm">
          {subtitle}
        </p>
      )}
      {showSkeleton ? (
        <RectangleSkeleton className="w-full h-8" />
      ) : (
        <TypingText
          className="tn:mx-0 mx-auto"
          sharedSentenceClasses="md:text-4xl text-3xl"
          sentences={[
            {
              text: `${paddedNumber(index)}.`,
              className: "font-light dark:text-teal-400 text-red-600 fira-code",
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

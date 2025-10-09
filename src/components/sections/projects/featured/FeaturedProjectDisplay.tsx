import React from "react"
import { ProjectData } from "src/types/ProjectData"
import FeaturedProjectBanner from "./FeaturedProjectBanner"
import ProjectLabel from "../ui/ProjectLabel"
import FeaturedProjectHeader from "./FeaturedProjectHeader"
import FeaturedProjectSummary from "./FeaturedProjectSummary"
import ProjectTools from "../ui/ProjectTools"
import ProjectLinks from "../ui/ProjectLinks"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import ProjectSlugButton from "../ui/ProjectSlugButton"
import { useMediaQuery } from "react-responsive"
import { useSwipeable } from "react-swipeable"

interface Props extends ProjectData, SkeletonProps {
  index: number
  showPrevious?: () => void
  showNext?: () => void
}
const FeaturedProjectDisplay = ({
  index = -1,
  showPrevious,
  showNext,
  showSkeleton = false,
  title,
  subtitle,
  images,
  label,
  summary,
  tools,
  links,
  slug,
}: Props) => {
  const isCollapsed = useMediaQuery({
    query: "(max-width: 1280px)",
  })
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isCollapsed && showPrevious) {
        showPrevious()
      }
    },
    onSwipedRight: () => {
      if (isCollapsed && showNext) {
        showNext()
      }
    },
    trackMouse: true,
  })
  return (
    <div className="relative flex rounded-2xl my-4 w-full xl:overflow-visible overflow-hidden">
      <FeaturedProjectBanner showSkeleton={showSkeleton} images={images} />

      <div
        {...handlers}
        className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col dark:text-gray-100 text-black justify-center items-start tracking-wider tn:space-y-3 space-y-6"
      >
        <ProjectLabel
          showSkeleton={showSkeleton}
          label={label}
          className="mb-2 tn:ms-auto tn:me-0 mx-auto"
        />
        <FeaturedProjectHeader
          showSkeleton={showSkeleton}
          title={title}
          subtitle={subtitle}
          index={index}
        />
        <div className="flex flex-col min-h-48 justify-between">
          <FeaturedProjectSummary
            showSkeleton={showSkeleton}
            summary={summary}
          />
          <ProjectTools
            showSkeleton={showSkeleton}
            tools={tools}
            className="tn:text-sm text-xs tn:mx-0 mx-auto"
          />
        </div>
        <div className="w-full flex items-center tn:justify-between justify-center tn:flex-row flex-col tn:gap-0 gap-6">
          <ProjectLinks showSkeleton={showSkeleton} links={links} />
          <ProjectSlugButton slug={slug} showSkeleton={showSkeleton} />
        </div>
      </div>
    </div>
  )
}
export default FeaturedProjectDisplay

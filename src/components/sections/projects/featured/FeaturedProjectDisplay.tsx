import React, { useEffect, useMemo, useState } from "react"
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
import FeaturedProjectSelectionNav from "./FeaturedProjectSelectionNav"
import SwipeRightIcon from "src/components/ui/images/misc/SwipeRightIcon"
import PlainText from "src/components/ui/text/PlainText"
import { GetGalleryEntrySummary } from "src/components/props/PictureData"

interface Props extends ProjectData, SkeletonProps {
  projectsCount: number
  index: number
  showPrevious: () => void
  showNext: () => void
  setIndex: (index: number) => void
  reverse: boolean
}
const FeaturedProjectDisplay = ({
  projectsCount,
  index = -1,
  showPrevious,
  showNext,
  setIndex,
  reverse,
  showSkeleton = false,
  title,
  subtitle,
  gallery,
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
  const [entryIndex, setEntryIndex] = useState(0)

  const viewingSummary = useMemo(() => {
    if (isCollapsed) {
      return summary
    }
    const viewingEntry = gallery?.entries[entryIndex]
    const entrySummary = viewingEntry
      ? GetGalleryEntrySummary(viewingEntry)
      : null
    return entrySummary ?? summary
  }, [gallery, entryIndex, summary, isCollapsed])

  return (
    <div
      className={`relative flex ${
        reverse && "flex-row-reverse"
      } rounded-2xl my-4 w-full xl:overflow-visible overflow-hidden`}
    >
      <div
        className={`xl:w-1/2 flex flex-col my-auto ${
          projectsCount > 1 ? "pt-14" : "pt-8"
        }`}
      >
        <FeaturedProjectBanner
          showSkeleton={showSkeleton}
          gallery={gallery}
          reverse={reverse}
          entryIndex={entryIndex}
          setEntryIndex={setEntryIndex}
        />
        {projectsCount > 1 && (
          <FeaturedProjectSelectionNav
            filesCount={projectsCount}
            setIndex={setIndex}
            viewingIndex={index}
            className="mt-6 xl:block hidden"
          />
        )}
      </div>
      <div
        {...handlers}
        className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col dark:text-gray-100 text-black justify-center items-start tracking-wider tn:space-y-3 space-y-6"
      >
        <div className="flex flex-row w-full">
          {projectsCount > 1 && (
            <div className="xl:hidden flex flex-row items-center gap-4">
              <SwipeRightIcon className="w-8 h-8" />
              <PlainText
                overridesColor
                className="text-gray-500 text-sm fira-code"
              >
                Swipe next
              </PlainText>
            </div>
          )}
          <ProjectLabel
            showSkeleton={showSkeleton}
            label={label}
            className="mb-2 tn:ms-auto tn:me-0 mx-auto"
          />
        </div>
        <FeaturedProjectHeader
          showSkeleton={showSkeleton}
          title={title}
          subtitle={subtitle}
          index={index + 1}
        />
        <div className="flex flex-col min-h-60 xl:max-h-60 justify-between">
          <FeaturedProjectSummary
            showSkeleton={showSkeleton}
            summary={viewingSummary}
          />
          <ProjectTools
            showSkeleton={showSkeleton}
            tools={tools}
            className="tn:text-sm text-xs tn:mx-0 mx-auto"
          />
        </div>
        <div className="w-full xl:pt-0 pt-2 flex items-center tn:justify-between justify-center tn:flex-row flex-col tn:gap-0 gap-6">
          <ProjectLinks showSkeleton={showSkeleton} links={links} />
          <ProjectSlugButton slug={slug} showSkeleton={showSkeleton} />
        </div>
      </div>
    </div>
  )
}
export default FeaturedProjectDisplay

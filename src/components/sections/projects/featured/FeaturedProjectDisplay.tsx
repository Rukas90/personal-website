import React, { useMemo, useState } from "react"
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
import useGallery from "src/components/hooks/useGallery"
import GalleryAutoButton from "src/components/ui/slideshow/GalleryAutoButton"

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
  const nextProjectSwipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isCollapsed && showNext) {
        showNext()
      }
    },
    onSwipedRight: () => {
      if (isCollapsed && showPrevious) {
        showPrevious()
      }
    },
    trackMouse: true,
  })
  const nextProjectEntrySwipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (isCollapsed) {
        state.viewNext()
      }
    },
    onSwipedRight: () => {
      if (isCollapsed) {
        state.viewPrevious()
      }
    },
    trackMouse: true,
  })
  const [entryIndex, setEntryIndex] = useState(0)
  const state = useGallery(entryIndex, setEntryIndex, showSkeleton, gallery)

  const viewingCustomEntry = useMemo(() => {
    const viewingEntry = gallery?.entries[entryIndex]

    if (typeof viewingEntry === "string") {
      return null
    }
    return viewingEntry
  }, [gallery, entryIndex])

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
          state={state}
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
      <div className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col dark:text-gray-100 text-black justify-center items-start tracking-wider tn:space-y-3 space-y-6">
        <div className="flex sm:flex-row flex-col w-full justify-between">
          {projectsCount > 1 && (
            <div
              {...nextProjectSwipeHandlers}
              className="xl:hidden flex flex-row items-center gap-4 sm:mb-0 mb-4"
            >
              <SwipeRightIcon className="w-8 h-8" />
              <PlainText
                overridesColor
                className="text-gray-500 text-sm fira-code cursor-grab select-none"
              >
                Swipe here view next project
              </PlainText>
            </div>
          )}
          <div className="flex flex-row sm:items-end items-center justify-between mb-2 sm:ml-auto ml-0">
            <ProjectLabel showSkeleton={showSkeleton} label={label} />
            {isCollapsed && (
              <GalleryAutoButton
                enabled={state.autoEnabled}
                onToggleEnabled={() => state.toggleAutoState()}
                startTime={state.timeoutDate}
                delay={state.delay}
                className="ml-4"
              />
            )}
          </div>
        </div>
        <FeaturedProjectHeader
          showSkeleton={showSkeleton}
          title={title}
          subtitle={subtitle}
          index={index + 1}
        />
        <div
          {...nextProjectEntrySwipeHandlers}
          className={`flex flex-col min-h-60 xl:max-h-60 justify-between ${
            isCollapsed && "cursor-grab select-none"
          }`}
        >
          <div className="mb-4">
            <FeaturedProjectSummary
              showSkeleton={showSkeleton}
              sources={viewingCustomEntry?.sources}
              summary={
                viewingCustomEntry && viewingCustomEntry.summary
                  ? viewingCustomEntry.summary
                  : summary
              }
            />
          </div>

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

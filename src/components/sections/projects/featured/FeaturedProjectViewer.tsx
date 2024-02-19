import React from "react"
import Button from "src/components/ui/buttons/Button"
import { ProjectData } from "src/types/ProjectData"
import FeaturedProjectBanner from "./FeaturedProjectBanner"
import ProjectLabel from "../ui/ProjectLabel"
import FeaturedProjectHeader from "./FeaturedProjectHeader"
import FeaturedProjectSummary from "./FeaturedProjectSummary"
import ProjectTools from "../ui/ProjectTools"
import ProjectLinks from "../ui/ProjectLinks"
import { SkeletonProps } from "src/components/props/SkeletonProps"

interface Props extends ProjectData, SkeletonProps {
  index: number
}

const FeaturedProjectViewer = ({
  index = -1,
  showSkeleton = false,
  title,
  subtitle,
  bannerBg,
  label,
  summary,
  tools,
  links,
  slug,
}: Props) => {
  return (
    <div className="relative flex rounded-2xl my-4 w-full xl:overflow-visible overflow-hidden">
      <FeaturedProjectBanner showSkeleton={showSkeleton} bannerBg={bannerBg} />

      <div className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col dark:text-gray-100 text-black justify-center items-start tracking-wider space-y-3">
        <ProjectLabel showSkeleton={showSkeleton} label={label} />
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
          <ProjectTools showSkeleton={showSkeleton} tools={tools} />
        </div>
        <div className="w-full flex justify-between">
          <ProjectLinks showSkeleton={showSkeleton} links={links} />
          <Button
            showSkeleton={showSkeleton}
            className="fade-left"
            label="Learn more"
            href={slug}
          />
        </div>
      </div>
    </div>
  )
}
export default FeaturedProjectViewer

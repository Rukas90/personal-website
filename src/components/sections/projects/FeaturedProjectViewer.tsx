import React from "react"
import Markdown from "markdown-to-jsx"
import Button from "src/components/ui/buttons/Button"
import UnityBtn from "src/components/ui/buttons/derives/UnityBtn"
import SiteBtn from "src/components/ui/buttons/derives/SiteBtn"
import { ProjectData } from "src/types/ProjectData"
import ProjectBanner from "./ProjectBanner"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"

interface Props extends ProjectData {
  index: number
  showSkeleton?: boolean
}

const FeaturedProjectViewer = ({
  index = 1,
  showSkeleton = false,
  title,
  subtitle,
  bannerSrc,
  label,
  summary,
  tools,
  links,
  slug,
}: Props) => {
  return (
    <div className="relative flex rounded-2xl my-4 w-full xl:overflow-visible overflow-hidden">
      <div className="w-1/2 xl:flex hidden justify-center items-center">
        <ProjectBanner
          showSkeleton={showSkeleton}
          frontSrc={bannerSrc}
          backSrc={bannerSrc}
          showFront
        />
      </div>
      <div className="absolute top-0 left-0 -z-10 w-full h-full xl:hidden block pointer-events-none">
        {showSkeleton ? (
          <div className="bg-gray-950 w-full h-full">

          </div>
        ) : (
          <div className="tint">
            <img
              className="object-cover scale-110 grayscale opacity-5 brightness-50"
              src={bannerSrc}
            />
          </div>
        )}
      </div>
      <div className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col text-gray-100 justify-center items-start tracking-wider space-y-3">
        <div className="flex gap-4 justify-end w-full mb-2">
          {showSkeleton ? (
            <RectangleSkeleton className="w-24 h-4" />
          ) : (
            <div className="font-bold text-xs bg-teal-400 text-gray-950 px-4 py-1 rounded-3xl">
              {label}
            </div>
          )}
        </div>
        {showSkeleton ? (
          <RectangleSkeleton className="w-1/4 h-4" />
        ) : (
          <p className="text-gray-400 pb-1">{subtitle}</p>
        )}
        {showSkeleton ? (
          <RectangleSkeleton className="w-full h-8" />
        ) : (
          <p className="text-4xl font-semibold">
            <span className="font-light text-teal-400">{index}. </span>
            <span>{title}</span>
          </p>
        )}
        <div className="py-4 font-light text-sm text-justify w-full min-h-40">
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
            <Markdown>{summary}</Markdown>
          )}
        </div>
        <div className="flex gap-3 text-sm">
          <span className="font-semibold text-nowrap text-teal-400">
            Built using:
          </span>
          {showSkeleton ? (
            <RectangleSkeleton className="w-24 h-4 self-center" />
          ) : (
            <ul className="flex flex-wrap gap-2 text-gray-300 text-sm">
              {tools.map((tool, index) => (
                <li key={`Tool_${index}`}>{`${tool}${
                  index < tools.length - 1 ? ", " : ""
                }`}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-x-4 items-center">
            {showSkeleton ? (
              <RectangleSkeleton className="w-24 h-6" />
            ) : (
              <>
                <UnityBtn
                  svg={{ fill: "#2dd4bf" }}
                  className="scale-75 hover:scale-125"
                />
                <SiteBtn
                  svg={{ fill: "#2dd4bf" }}
                  className="scale-75 hover:scale-125"
                />
              </>
            )}
          </div>
          {showSkeleton ? (
            <RectangleSkeleton className="w-32 h-12 rounded-md" />
          ) : (
            <Button label="Learn more" />
          )}
        </div>
      </div>
    </div>
  )
}
export default FeaturedProjectViewer

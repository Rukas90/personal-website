import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import { ProjectData } from "src/types/ProjectData"
import ProjectLinks from "../ui/ProjectLinks"
import ProjectLabel from "../ui/ProjectLabel"
import ProjectTools from "../ui/ProjectTools"
import ProjectSlugButton from "../ui/ProjectSlugButton"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"
import ImagePicture from "src/components/ui/Picture"
import Markdown from "markdown-to-jsx"

interface Props extends ProjectData, SkeletonProps {}

const ListedProjectDisplay = ({
  showSkeleton = false,
  title,
  images,
  subtitle,
  label,
  summary,
  tools,
  links,
  slug,
}: Props) => {
  return (
    <div className="relative listed-project-display flex flex-col overflow-hidden transition-colors dark:bg-[#080f21] h-[465px] hover:dark:bg-[#0a1329] bg-[#e2e5e9] hover:bg-[#dce0e5] tn:p-8 px-4 py-6 rounded-md dark:shadow-none shadow-lg">
      {/* Overlay BG */}
      {images && images.files.length > 0 && (
        <ImagePicture
          path={images.path}
          extensions={images.extensions}
          file={images.files[0]}
          className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover grayscale opacity-5"
        />
      )}

      {/* HEADER */}
      <div className="header-container flex tn:flex-row flex-col tn:gap-0 gap-6 tn:justify-between justify-center items-center">
        <ProjectLinks links={links} showSkeleton={showSkeleton} />
        <ProjectLabel label={label} showSkeleton={showSkeleton} />
      </div>

      {/* LABEL */}
      <div className="mt-6 text-start w-full">
        <div className="tn:text-xl text-lg font-medium tn:text-start text-center">
          {title}
        </div>
        <div className="mt-2 dark:text-gray-400 text-gray-800 tn:text-base text-sm tn:text-start text-center">
          {subtitle}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="mt-4 w-full h-80 dark:text-gray-300 text-gray-700 overflow-y-scroll tn:pe-4 pe-0 ">
        <ParagraphBlock className="tn:text-start text-center px-4">
          <Markdown>
            {summary}
          </Markdown>
        </ParagraphBlock>
      </div>

      {/* TOOLS */}
      <div className="mt-8 mb-8 tn:text-sm text-xs">
        <ProjectTools tools={tools} showSkeleton={showSkeleton} />
      </div>
      {slug && (
        <ProjectSlugButton
          className="flex tn:justify-end justify-center"
          slug={slug}
          showSkeleton={showSkeleton}
        />
      )}
    </div>
  )
}
export default ListedProjectDisplay

import Markdown from "markdown-to-jsx"
import React from "react"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import { ProjectData } from "src/types/ProjectData"
import Links from "./Links"
import Label from "./Label"
import Tools from "./Tools"
import Button from "src/components/ui/buttons/Button"

interface Props extends ProjectData, SkeletonProps {}

const ListedProjectDisplay = ({
  showSkeleton = false,
  title,
  subtitle,
  label,
  summary,
  tools,
  links,
  slug,
}: Props) => {
  return (
    <div className="flex flex-col dark:bg-[#080f21] bg-[#e2e5e9] p-8 rounded-md dark:shadow-none shadow-lg">
      <div className="flex justify-between">
        <Links links={links} showSkeleton={showSkeleton} />
        <Label label={label} showSkeleton={showSkeleton} />
      </div>
      <div className="mt-6 text-start w-full">
        <div className="text-xl font-medium">{title}</div>
        <div className="mt-2 dark:text-gray-400 text-gray-800">{subtitle}</div>
        <div className="mt-6 w-full dark:text-gray-300 text-gray-700">
          <span className="whitespace-normal overflow-hidden text-ellipsis text-sm">
            {summary}
          </span>
        </div>
        <div className="mt-8">
          <Tools tools={tools} showSkeleton={showSkeleton} />
        </div>
        <div className="w-full justify-end flex">
          <Button
            showSkeleton={showSkeleton}
            className="fade-left mt-8 text-sm"
            label="Learn more"
            href={slug}
          />
        </div>
      </div>
    </div>
  )
}
export default ListedProjectDisplay

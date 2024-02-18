import React from "react"
import Button from "src/components/ui/buttons/Button"
import { ProjectData } from "src/types/ProjectData"
import Banner from "./Banner"
import Label from "./Label"
import Header from "./Header"
import Summary from "./Summary"
import Tools from "./Tools"
import Links from "./Links"

interface Props extends ProjectData {
  index: number
  showSkeleton?: boolean
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
      <Banner showSkeleton={showSkeleton} bannerBg={bannerBg} />

      <div className="xl:w-1/2 w-full xl:ps-8 p-8 flex z-10 flex-col dark:text-gray-100 text-black justify-center items-start tracking-wider space-y-3">
        <Label showSkeleton={showSkeleton} label={label} />
        <Header
          showSkeleton={showSkeleton}
          title={title}
          subtitle={subtitle}
          index={index}
        />
        <div className="flex flex-col min-h-48 justify-between">
          <Summary showSkeleton={showSkeleton} summary={summary} />
          <Tools showSkeleton={showSkeleton} tools={tools} />
        </div>
        <div className="w-full flex justify-between">
          <Links showSkeleton={showSkeleton} links={links} />
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

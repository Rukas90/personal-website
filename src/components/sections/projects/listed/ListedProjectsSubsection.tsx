import React, { useState } from "react"
import ListedProjectDisplay from "./ListedProjectDisplay"
import Button from "src/components/ui/buttons/Button"
import { ProjectData } from "src/types/ProjectData"

const ListedProjectsSubsection = ({
  projects,
}: {
  projects: ProjectData[]
}) => {
  const defaultShowCount = 3
  const [showMore, setShowMore] = useState(false)

  const projectsCount = projects.length

  return (
    <>
      <div
        aria-label="Listed Projects"
        className="w-full basis-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8"
      >
        {projects?.map((project, index) => {
          if (!showMore && index >= defaultShowCount) {
            return
          }
          return (
            <ListedProjectDisplay
              key={index}
              {...project}
              showSkeleton={!project}
            />
          )
        })}
      </div>
      {projectsCount > defaultShowCount && (
        <div className="mt-8">
          <Button
            onClick={() => setShowMore((current) => !current)}
            label={`Show ${showMore ? "More" : "Less"}`}
          />
        </div>
      )}
    </>
  )
}
export default ListedProjectsSubsection

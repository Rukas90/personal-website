import React, { useMemo } from "react"
import useListedProjects from "./hooks/useListedProjects"
import ListedProjectDisplay from "./ui/ListedProjectDisplay"

const ListedProjects = () => {
  const { loadedCount, projects, loadBatch, statuses } = useListedProjects()

  return (
    <>
      <div className="w-full basis-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 mt-24">
        {projects?.map((project, index) => (
          <ListedProjectDisplay
            key={index}
            {...project}
            showSkeleton={statuses.at(index) || !project}
          />
        ))}
      </div>
    </>
  )
}
export default ListedProjects

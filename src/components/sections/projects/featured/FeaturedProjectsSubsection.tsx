import React, { useMemo } from "react"
import useFeaturedProjects from "../hooks/useFeaturedProjects"
import FeaturedProjectViewer from "./FeaturedProjectViewer"

const FeaturedProjectsSubsection = () => {
  const { viewingIndex, setViewingIndex, projects, fetchProject, statuses } =
    useFeaturedProjects()

  const handleNext = () => {
    setProject((viewingIndex + 1) % projects.length)
  }
  const handlePrevious = () => {
    setProject((viewingIndex - 1 + projects.length) % projects.length)
  }
  const setProject = (newIndex: number) => {
    setViewingIndex(newIndex)
    fetchProject(newIndex)
  }

  const currentProject = useMemo(
    () => projects[viewingIndex],
    [viewingIndex, projects]
  )
  const currentStatus = useMemo(
    () => statuses[viewingIndex],
    [viewingIndex, statuses]
  )
  return (
    <>
      <div className="relative flex w-full ">
        <FeaturedProjectViewer
          key={viewingIndex + 1}
          {...currentProject}
          index={viewingIndex + 1}
          showSkeleton={currentStatus || !currentProject}
        />
      </div>
      <div className="w-full">
        <div className="w-1/2 space-x-6">
          <ul className="w-full flex justify-center gap-4">
            <li className="border-2 dark:bg-teal-400 bg-red-600 dark:border-teal-400 border-red-600 w-4 h-4 rounded-full"></li>
            <li className="interactable border-2 dark:border-teal-400 border-red-600 w-4 h-4 rounded-full"></li>
            <li className="interactable border-2 dark:border-teal-400 border-red-600 w-4 h-4 rounded-full"></li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default FeaturedProjectsSubsection

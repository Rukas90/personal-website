import React, { useMemo, useRef } from "react"
import useFeaturedProjects from "../hooks/useFeaturedProjects"
import FeaturedProjectDisplay from "./FeaturedProjectDisplay"
import useSelfIntersection, {
  IntersectionChangeData,
} from "src/components/hooks/useSelfIntersection"

const FeaturedProjectsSubsection = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  const {
    viewingIndex,
    setViewingIndex,
    projects,
    fetchProject,
    statuses,
    filesCount,
  } = useFeaturedProjects()

  const onIntersectionChange = (data: IntersectionChangeData) => {
    if (!data.isIntersecting || data.observed) {
      return
    }
    fetchProject(0)
  }

  const _ = useSelfIntersection(ref, onIntersectionChange)

  const handleNext = () => {
    setProject((viewingIndex + 1) % projects.length)
  }
  const handlePrevious = () => {
    setProject((viewingIndex - 1 + projects.length) % projects.length)
  }
  const setIndex = (index: number) => {
    setProject(index)
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
      <div ref={ref} className="relative flex w-full">
        <FeaturedProjectDisplay
          key={viewingIndex + 1}
          {...currentProject}
          index={viewingIndex + 1}
          showSkeleton={currentStatus || !currentProject}
        />
      </div>
      <div className="xl:w-1/2 w-full">
        <ul className="w-full flex justify-center">
          {Array.from({ length: filesCount }, (_, index) => (
            <li
              onClick={() => setIndex(index)}
              key={index}
              className="p-3 interactable"
            >
              <div
                className={`${
                  viewingIndex === index ? "dark:bg-teal-400 bg-red-600" : ""
                } border-2 dark:border-teal-400 border-red-600 w-4 h-4 rounded-full pointer-events-none`}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default FeaturedProjectsSubsection

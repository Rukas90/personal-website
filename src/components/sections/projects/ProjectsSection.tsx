import React, { useMemo } from "react"
import SectionContainer from "../SectionContainer"
import FeaturedProjectViewer from "./featured/FeaturedProjectViewer"
import useFetchProjectsHook from "./hooks/useFetchProjectsHook" // Adjust the import path as needed
import Button from "src/components/ui/buttons/Button"

const ProjectsSection = () => {
  const { projects, statuses, viewingIndex, setViewingIndex, fetchProject } =
    useFetchProjectsHook()

  const handleNext = () => {
    const nextIndex = (viewingIndex + 1) % projects.current.length
    setViewingIndex(nextIndex)
    fetchProject(nextIndex)
  }
  const handlePrevious = () => {
    const prevIndex =
      (viewingIndex - 1 + projects.current.length) % projects.current.length
    setViewingIndex(prevIndex)
    fetchProject(prevIndex)
  }

  const currentProject = useMemo(
    () => projects.current[viewingIndex],
    [viewingIndex, projects.current]
  )
  const currentStatus = useMemo(
    () => statuses[viewingIndex],
    [viewingIndex, statuses]
  )
  return (
    <SectionContainer label="Featured Projects">
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
          <Button label="Previous" onClick={handlePrevious} />
          <Button label="Next" onClick={handleNext} />
        </div>
      </div>
      <div className="w-full basis-full grid grid-cols-3 gap-8 mt-24">
        <div className="bg-[#080f21] h-96"></div>
        <div className="bg-[#080f21] h-96"></div>
        <div className="bg-[#080f21] h-96"></div>
      </div>
    </SectionContainer>
  )
}
export default ProjectsSection

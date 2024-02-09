import React from "react"
import SectionContainer from "../SectionContainer"
import ProjectMenuItem from "./ProjectMenuItem"

const ProjectsSection = () => {
  return (
    <SectionContainer label="Featured Projects">
      <div className="relative flex overflow-x-scroll w-full ">
        <ProjectMenuItem />
      </div>
    </SectionContainer>
  )
}
export default ProjectsSection

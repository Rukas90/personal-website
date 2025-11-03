import React from "react"
import { FeaturedProjects } from "src/config/PortfolioConfig"
import FeaturedProjectsViewer from "./FeaturedProjectsViewer"
import { IsEven } from "src/utils/Math"

const FeaturedProjectsSubsection = ({
  projects,
}: {
  projects: FeaturedProjects[]
}) => {
  return (
    <div aria-label="Featured Projects">
      {projects.map((featured, index) => (
        <FeaturedProjectsViewer
          key={`FeaturedProjectsViewer_${index}`}
          projects={featured.projects}
          reverse={!IsEven(index)}
          className={index === projects.length - 1 ? "mb-0" : "mb-8"}
        />
      ))}
    </div>
  )
}
export default FeaturedProjectsSubsection

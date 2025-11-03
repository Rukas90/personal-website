import React from "react"
import SectionContainer from "../SectionContainer"
import FeaturedProjectsSubsection from "./featured/FeaturedProjectsSubsection"
import ListedProjectsSubsection from "./listed/ListedProjectsSubsection"
import SectionLabel from "../SectionLabel"
import { ProjectData } from "src/types/ProjectData"
import { FeaturedProjects } from "src/config/PortfolioConfig"

interface Props {
  featured: FeaturedProjects[]
  listed: ProjectData[]
}
const ProjectsSection = ({ featured, listed }: Props) => {
  return (
    <>
      <SectionContainer label="Featured Projects">
        <FeaturedProjectsSubsection projects={featured} />
        {listed && listed.length > 0 && (
          <div className="mt-32">
            <SectionLabel text="Other Projects" />
            <ListedProjectsSubsection projects={listed} />
          </div>
        )}
      </SectionContainer>
    </>
  )
}
export default ProjectsSection

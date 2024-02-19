import React, { useMemo } from "react"
import SectionContainer from "../SectionContainer"
import FeaturedProjects from "./FeaturedProjects"
import ListedProjects from "./ListedProjects"
import SectionLabel from "../SectionLabel"

const FeaturedProjectsSection = () => {
  return (
    <>
      <SectionContainer label="Featured Projects">
        <FeaturedProjects />

        <div className="mt-32">
          <SectionLabel text="Other Projects" />

          <ListedProjects />
        </div>
      </SectionContainer>
    </>
  )
}
export default FeaturedProjectsSection

import React from "react"
import SectionContainer from "../SectionContainer"
import FeaturedProjectsSubsection from "./featured/FeaturedProjectsSubsection"
import ListedProjectsSubsection from "./listed/ListedProjectsSubsection"
import SectionLabel from "../SectionLabel"

const FeaturedProjectsSection = () => {
  return (
    <>
      <SectionContainer label="Featured Projects">
        <FeaturedProjectsSubsection />

        <div className="mt-32">
          <SectionLabel text="Other Projects" />

          <ListedProjectsSubsection />
        </div>
      </SectionContainer>
    </>
  )
}
export default FeaturedProjectsSection

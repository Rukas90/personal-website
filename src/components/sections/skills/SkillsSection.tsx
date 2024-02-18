import React from "react"
import FrontEndSkills from "./categories/FrontEndSkills"
import SkillCard from "./SkillCard"
import BackEndSkills from "./categories/BackEndSkills"
import AndroidSkills from "./categories/AndroidSkills"
import DesignSkills from "./categories/DesignSkills"
import GameDevSkills from "./categories/GameDevSkills"
import CollaborationSkills from "./categories/CollaborationSkills"
import SectionContainer from "../SectionContainer"
import BorderContainer from "../BorderContainer"

const SkillsSection = () => {
  return (
    <SectionContainer label="Skills" borders={false}>
      <BorderContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCard
            title="Responsiveness"
            text="I ensure all websites are fully responsive, offering a seamless
            experience across various devices."
          />
          <SkillCard
            title="UI/UX Design"
            text="My focus is on detailed UI/UX design, creating visually appealing
          and dynamic websites."
          />
          <SkillCard
            title="Performance"
            className="col-span-full lg:col-span-1"
            text="I prioritize efficient performance, ensuring fast load times and
          smooth interactions for an enhanced user experience."
          />
        </div>
      </BorderContainer>
      <div>
        <BorderContainer>
          <FrontEndSkills />
          <BackEndSkills />
          <AndroidSkills />
          <DesignSkills />
          <GameDevSkills />
          <CollaborationSkills />
        </BorderContainer>
      </div>
    </SectionContainer>
  )
}
export default SkillsSection

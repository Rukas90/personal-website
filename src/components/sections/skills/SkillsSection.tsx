import React from "react"
import FrontEndSkills from "./FrontEndSkills"
import SkillCard from "./SkillCard"
import BackEndSkills from "./BackEndSkills"
import AndroidSkills from "./AndroidSkills"
import DesignSkills from "./DesignSkills"
import GameDevSkills from "./GameDevSkills"
import CollaborationSkills from "./CollaborationSkills"
import SectionContainer from "../SectionContainer"

const SkillsSection = () => {
  return (
    <SectionContainer label="Skills">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-16">
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
          text="I prioritize efficient performance, ensuring fast load times and
          smooth interactions for an enhanced user experience."
        />
      </div>

      {/* Individual Skills */}
      <FrontEndSkills />
      <BackEndSkills />
      <AndroidSkills />
      <DesignSkills />
      <GameDevSkills />
      <CollaborationSkills />
    </SectionContainer>
  )
}
export default SkillsSection

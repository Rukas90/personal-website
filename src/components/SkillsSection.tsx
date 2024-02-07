import React from "react"
import SectionLabel from "./SectionLabel"
import FrontEndSkills from "./FrontEndSkills"
import SkillCard from "./SkillCard"
import BackEndSkills from "./BackEndSkills"
import AndroidSkills from "./AndroidSkills"
import DesignSkills from "./DesignSkills"
import GameDevSkills from "./GameDevSkills"
import CollaborationSkills from "./CollaborationSkills"

const SkillsSection = () => {
  return (
    <div className="relative px-64 py-32 text-gray-100 text-center flex flex-col items-center">
      <SectionLabel text="Skills" />

      <div className="flex gap-6 mb-16">
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
    </div>
  )
}
export default SkillsSection

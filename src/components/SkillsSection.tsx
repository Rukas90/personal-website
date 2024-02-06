import React from "react"
import SectionLabel from "./SectionLabel"
import FrontEndSkills from "./FrontEndSkills"

const SkillsSection = () => {
  return (
    <div className="relative px-64 py-32 text-gray-100 text-center flex flex-col items-center">
      <SectionLabel text="Skills" />

      <FrontEndSkills />
      
    </div>
  )
}
export default SkillsSection

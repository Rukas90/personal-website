import React from "react"
import SkillsContainer from "./SkillsContainer"

import figma from "img/skills/figma.svg"
import photoshop from "img/skills/photoshop.svg"

const DesignSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Design"
        skills={[
          { icon: figma, label: "Figma" },
          { icon: photoshop, label: "Photoshop" },
        ]}
      />
    </>
  )
}
export default DesignSkills

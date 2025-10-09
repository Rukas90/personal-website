import React from "react"
import SkillsContainer from "../SkillsContainer"

import FigmaIcon from "src/components/ui/images/skills/design/FigmaIcon"
import PhotoshopIcon from "src/components/ui/images/skills/design/PhotoshopIcon"
import AffinityPhotoIcon from "src/components/ui/images/skills/design/AffinityPhotoIcon"

const DesignSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Design"
        skills={[
          {
            icon: <FigmaIcon />,
            label: "Figma",
          },
          {
            icon: <PhotoshopIcon />,
            label: "Photoshop",
          },
          {
            icon: <AffinityPhotoIcon />,
            label: "Affinity Photo",
          },
        ]}
      />
    </>
  )
}
export default DesignSkills

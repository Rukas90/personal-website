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
            url: "https://www.figma.com/",
          },
          {
            icon: <PhotoshopIcon />,
            label: "Photoshop",
            url: "https://www.adobe.com/products/photoshop.html",
          },
          {
            icon: <AffinityPhotoIcon />,
            label: "Affinity Photo",
            url: "https://affinity.serif.com/en-gb/photo/",
          },
        ]}
      />
    </>
  )
}
export default DesignSkills

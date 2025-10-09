import React from "react"
import SkillsContainer from "../SkillsContainer"
import ARIcon from "src/components/ui/images/skills/mobile-dev/ARIcon"
import AndroidStudioIcon from "src/components/ui/images/skills/mobile-dev/AndroidStudioIcon"
import KotlinIcon from "src/components/ui/images/skills/mobile-dev/KotlinIcon"

const AndroidSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Android development"
        skills={[
          {
            icon: <KotlinIcon />,
            label: "Kotlin",
          },
          {
            icon: <ARIcon />,
            label: "AR",
          },
          {
            icon: <AndroidStudioIcon />,
            label: "Android Studio",
          },
        ]}
      />
    </>
  )
}
export default AndroidSkills

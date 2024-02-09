import React from "react"
import SkillsContainer from "./SkillsContainer"

import kotlin from "img/skills/kotlin.svg"
import ar from "img/skills/ar.svg"
import androidStudio from "img/skills/androidstudio.svg"

const AndroidSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Android development"
        skills={[
          { icon: kotlin, label: "Kotlin" },
          { icon: ar, label: "AR" },
          { icon: androidStudio, label: "Android Studio" },
        ]}
      />
    </>
  )
}
export default AndroidSkills

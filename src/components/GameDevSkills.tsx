import React from "react"
import SkillsContainer from "./SkillsContainer"

import unity from "img/skills/unity.svg"
import csharp from "img/skills/csharp.svg"
import shaders from "img/skills/shaders.svg"
import substancePainter from "img/skills/substance-painter.svg"
import substanceDesigner from "img/skills/substance-designer.svg"
import quixel from "img/skills/quixel.svg"
import blender from "img/skills/blender.svg"
import threeMax from "img/skills/3ds-max.svg"

const GameDevSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Game Development"
        skills={[
          { icon: unity, label: "Unity" },
          { icon: csharp, label: "C#" },
          { icon: shaders, label: "HLSL" },
          { icon: substancePainter, label: "Substance Painter" },
          { icon: substanceDesigner, label: "Substance Designer" },
          { icon: quixel, label: "Quixel Mixer" },
          { icon: blender, label: "Blender" },
          { icon: threeMax, label: "3Ds Max" },
          
        ]}
      />
    </>
  )
}
export default GameDevSkills

import React from "react"
import SkillsContainer from "../SkillsContainer"
import ThreeMaxIcon from "src/components/ui/images/skills/game-dev/ThreeMaxIcon"
import UnityIcon from "src/components/ui/images/skills/game-dev/UnityIcon"
import HLSLIcon from "src/components/ui/images/skills/game-dev/HLSLIcon"
import CSharpIcon from "src/components/ui/images/skills/game-dev/CSharpIcon"
import BlenderIcon from "src/components/ui/images/skills/game-dev/BlenderIcon"
import SubstancePainterIcon from "src/components/ui/images/skills/game-dev/SubstancePainterIcon"
import SubstanceDesignerIcon from "src/components/ui/images/skills/game-dev/SubstanceDesignerIcon"
import QuixelMixerIcon from "src/components/ui/images/skills/game-dev/QuixelMixerIcon"

const GameDevSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Game Development"
        skills={[
          { icon: <UnityIcon />, label: "Unity" },
          { icon: <CSharpIcon />, label: "C#" },
          { icon: <HLSLIcon />, label: "HLSL" },
          { icon: <SubstancePainterIcon />, label: "Substance Painter" },
          { icon: <SubstanceDesignerIcon />, label: "Substance Designer" },
          { icon: <QuixelMixerIcon />, label: "Quixel Mixer" },
          { icon: <BlenderIcon />, label: "Blender" },
          { icon: <ThreeMaxIcon />, label: "3Ds Max" },
        ]}
      />
    </>
  )
}
export default GameDevSkills

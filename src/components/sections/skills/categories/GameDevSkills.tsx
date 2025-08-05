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
          { icon: <UnityIcon />, label: "Unity", url: "https://unity.com/" },
          {
            icon: <CSharpIcon />,
            label: "C#",
            url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          },
          {
            icon: <HLSLIcon />,
            label: "HLSL",
            url: "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl",
          },
          {
            icon: <SubstancePainterIcon />,
            label: "Substance Painter",
            url: "https://www.adobe.com/products/substance3d/apps/painter.html",
          },
          {
            icon: <SubstanceDesignerIcon />,
            label: "Substance Designer",
            url: "https://www.adobe.com/products/substance3d/apps/designer.html",
          },
          {
            icon: <QuixelMixerIcon />,
            label: "Quixel Mixer",
            url: "https://docs.quixel.com/mixer/1/en/topic/welcome.html",
          },
          {
            icon: <BlenderIcon />,
            label: "Blender",
            url: "https://www.blender.org/",
          },
          {
            icon: <ThreeMaxIcon />,
            label: "3Ds Max",
            url: "https://www.autodesk.com/products/3ds-max/overview",
          },
        ]}
      />
    </>
  )
}
export default GameDevSkills

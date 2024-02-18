import React from "react"
import SkillsContainer from "../SkillsContainer"

import HTML5Icon from "src/components/ui/images/skills/front-end/HTML5Icon"
import CSS3Icon from "src/components/ui/images/skills/front-end/CSS3Icon"
import SCSSIcon from "src/components/ui/images/skills/front-end/SCSSIcon"
import BootstrapIcon from "src/components/ui/images/skills/front-end/BootstrapIcon"
import TailwindIcon from "src/components/ui/images/skills/front-end/TailwindIcon"
import JavaScriptIcon from "src/components/ui/images/skills/front-end/JavaScriptIcon"
import TypeScriptIcon from "src/components/ui/images/skills/front-end/TypeScriptIcon"
import ReactIcon from "src/components/ui/images/skills/front-end/ReactIcon"
import JQueryIcon from "src/components/ui/images/skills/front-end/JQueryIcon"
import ThreeJSIcon from "src/components/ui/images/skills/front-end/ThreeJSIcon"

const FrontEndSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Front end"
        skills={[
          { icon: <HTML5Icon />, label: "HTML5" },
          { icon: <CSS3Icon />, label: "CSS3" },
          { icon: <SCSSIcon />, label: "SCSS" },
          { icon: <BootstrapIcon />, label: "Bootstrap" },
          { icon: <TailwindIcon />, label: "Tailwind" },
          { icon: <JavaScriptIcon />, label: "JavaScript" },
          { icon: <TypeScriptIcon />, label: "TypeScript" },
          { icon: <ReactIcon />, label: "React" },
          { icon: <JQueryIcon />, label: "JQuery" },
          { icon: <ThreeJSIcon />, label: "ThreeJS" },
        ]}
      />
    </>
  )
}
export default FrontEndSkills

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
          {
            icon: <HTML5Icon />,
            label: "HTML5",
            url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
          },
          {
            icon: <CSS3Icon />,
            label: "CSS3",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: <SCSSIcon />,
            label: "SCSS",
            url: "https://medium.com/@Dev_Frank/curious-about-scss-heres-why-you-should-be-b260fc0bd7d3/",
          },
          {
            icon: <BootstrapIcon />,
            label: "Bootstrap",
            url: "https://getbootstrap.com/",
          },
          {
            icon: <TailwindIcon />,
            label: "Tailwind",
            url: "https://tailwindcss.com/",
          },
          {
            icon: <JavaScriptIcon />,
            label: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          {
            icon: <TypeScriptIcon />,
            label: "TypeScript",
            url: "https://www.typescriptlang.org/",
          },
          { icon: <ReactIcon />, label: "React", url: "https://react.dev/" },
          { icon: <JQueryIcon />, label: "JQuery", url: "https://jquery.com/" },
          {
            icon: <ThreeJSIcon />,
            label: "ThreeJS",
            url: "https://threejs.org/",
          },
        ]}
      />
    </>
  )
}
export default FrontEndSkills

import React from "react"
import SkillsContainer from "./SkillsContainer"

import html from "img/skills/html.svg"
import css3 from "img/skills/css3.svg"
import scss from "img/skills/scss.svg"
import bootstrap from "img/skills/bootstrap.svg"
import tailwind from "img/skills/tailwind.svg"
import javascript from "img/skills/javascript.svg"
import typescript from "img/skills/typescript.svg"
import jquery from "img/skills/jquery.svg"
import react from "img/skills/react.svg"

const FrontEndSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Front end"
        skills={[
          { icon: html, label: "HTML5" },
          { icon: css3, label: "CSS3" },
          { icon: scss, label: "SCSS" },
          { icon: bootstrap, label: "Bootstrap" },
          { icon: tailwind, label: "Tailwind" },
          { icon: javascript, label: "JavaScript" },
          { icon: typescript, label: "TypeScript" },
          { icon: react, label: "React" },
          { icon: jquery, label: "JQuery" },
        ]}
      />
    </>
  )
}
export default FrontEndSkills

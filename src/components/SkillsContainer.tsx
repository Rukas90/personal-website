import React, { useState } from "react"
import { SkillProps } from "src/types/SkillProps"
import Skill from "./Skill"

interface Props {
  skills: SkillProps[]
}

const SkillsContainer = ({ skills }: Props) => {
  const [hoverIndex, setHoverIndex] = useState(-1)

  return (
    <div className="relative max-w-4xl p-16">
      <div className="flex flex-wrap flex-col xl:flex-row justify-center items-center gap-20">
        {skills.map((props, index) => (
          <Skill
            key={index}
            icon={props.icon}
            label={props.label}
            dim={hoverIndex !== -1 && hoverIndex !== index}
            onHoverStateChange={(state) => {
              setHoverIndex(state ? index : -1)
            }}
          />
        ))}
      </div>
    </div>
  )
}
export default SkillsContainer

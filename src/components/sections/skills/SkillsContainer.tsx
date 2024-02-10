import React, { useMemo, useState } from "react"
import { SkillIconProps } from "src/components/props/SkillProps"
import SkillIcon from "./SkillIcon"

interface Props {
  label: string
  skills: SkillIconProps[]
}

const SkillsContainer = ({ label, skills }: Props) => {
  const [hoverIndex, setHoverIndex] = useState(-1)

  const hasFocus = useMemo(() => hoverIndex !== -1, [hoverIndex])

  return (
    <div className="relative px-0 2xl:px-16 pb-16 w-full">
      <div className="mb-16">
        <p
          className={`pale-light-blue-text transition-opacity uppercase tracking-widest ${
            hasFocus ? "opacity-100" : "opacity-65"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16 max-w-2xl mx-auto">
        {skills.map((props, index) => (
          <div className="place-self-center" key={`Skill_${index}`}>
            <SkillIcon
              icon={props.icon}
              label={props.label}
              defocus={hasFocus && hoverIndex !== index}
              onHoverStateChange={(state) => {
                setHoverIndex(state ? index : -1)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillsContainer

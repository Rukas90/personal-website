import React, { useMemo, useState } from "react"
import { SkillIconProps } from "src/types/SkillProps"
import SkillIcon from "./SkillIcon"

interface Props {
  label: string
  skills: SkillIconProps[]
}

const SkillsContainer = ({ label, skills }: Props) => {
  const [hoverIndex, setHoverIndex] = useState(-1)

  const hasFocus = useMemo(() => hoverIndex !== -1, [hoverIndex])

  return (
    <div className="relative max-w-5xl p-16 pt-0">
      <div className="mb-16">
        <p
          className={`pale-light-blue-text transition-opacity uppercase tracking-widest  ${
            hasFocus ? "opacity-100" : "opacity-65"
          }`}
        >
          {label}
        </p>
      </div>
      <div className="flex flex-wrap flex-col xl:flex-row justify-center items-center gap-20">
        {skills.map((props, index) => (
          <SkillIcon
            key={index}
            icon={props.icon}
            label={props.label}
            defocus={hasFocus && hoverIndex !== index}
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

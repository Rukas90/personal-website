import React, { useMemo, useRef, useState } from "react"
import { SkillIconProps } from "src/components/props/SkillProps"
import SkillIcon from "./SkillIcon"
import useElementReveal from "src/components/hooks/useElementReveal"

interface Props {
  label: string
  skills: SkillIconProps[]
}

const SkillsContainer = ({ label, skills }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useElementReveal(ref)

  const [hoverIndex, setHoverIndex] = useState(-1)

  const hasFocus = useMemo(() => hoverIndex !== -1, [hoverIndex])

  return (
    <div
      ref={ref}
      className="relative reveal flex px-0 2xl:px-16 pb-16 last-of-type:pb-0 w-full"
    >
      <div className="m-auto">
        <div className="mb-16">
          <p
            className={`dark:text-[#eff8ff] text-black dark:font-light font-semibold transition-opacity uppercase tracking-widest ${
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
    </div>
  )
}
export default SkillsContainer

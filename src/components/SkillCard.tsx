import React from "react"
import { SkillCardProps } from "src/types/SkillProps"

const SkillCard = ({ title, text }: SkillCardProps) => {
  return (
    <div className="interactable p-8 skill-bg text-md tracking-wider shadow-2xl">
      <div className="pointer-events-none">
        <p className="font-medium uppercase text-xl">{title}</p>
        <div className="text-teal-600 text-4xl tracking-widest mb-4">..</div>
        <p className="font-light text-gray-250">{text}</p>
      </div>
    </div>
  )
}
export default SkillCard

import React from "react"
import { SkillCardProps } from "src/components/props/SkillProps"

interface Props extends SkillCardProps {
  className?: string
}

const SkillCard = ({ title, text, className }: Props) => {
  return (
    <div
      className={`interactable p-8 skill-bg text-md tracking-wider shadow-2xl ${className}`}
    >
      <div className="pointer-events-none">
        <p className="font-medium uppercase text-md sm:text-lg md:text-xl">
          {title}
        </p>
        <div className="text-teal-600 text-3xl sm:text-4xl tracking-widest mb-4">
          ..
        </div>
        <p className="font-light text-gray-250 text-sm sm:text-base">{text}</p>
      </div>
    </div>
  )
}
export default SkillCard

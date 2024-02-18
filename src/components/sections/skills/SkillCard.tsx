import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"
import { SkillCardProps } from "src/components/props/SkillProps"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"

interface Props extends SkillCardProps, GeneralProps {}

const SkillCard = ({ title, text, className }: Props) => {
  return (
    <div
      className={`interactable p-8 skill-bg text-md tracking-wider shadow-2xl ${className}`}
    >
      <div className="pointer-events-none">
        <p className="font-medium uppercase text-md sm:text-lg md:text-xl">
          {title}
        </p>
        <div className="dark:text-teal-600 text-black text-3xl sm:text-4xl tracking-widest mb-4">
          ..
        </div>
        <ParagraphBlock>{text}</ParagraphBlock>
      </div>
    </div>
  )
}
export default SkillCard

import React, { useState } from "react"
import { SkillIconProps } from "src/components/props/SkillProps"

interface Props extends SkillIconProps {
  defocus?: boolean
  onHoverStateChange?: (newState: boolean) => void
}

const SkillIcon = ({ icon, label, defocus, onHoverStateChange }: Props) => {
  const [isHovered, setHovered] = useState(false)

  const onHover = () => setHoverState(true)
  const onLeave = () => setHoverState(false)

  const setHoverState = (state: boolean) => {
    setHovered(state)

    if (onHoverStateChange) {
      onHoverStateChange(state)
    }
  }

  return (
    <div className="relative flex justify-center items-end">
      <img
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`interactable skill-icon xl:w-14 xl:h-14 lg:w-12 lg:h-12 w-11 h-11 ${
          defocus && "defocus"
        }`}
        src={icon}
      />
      <div
        className={`absolute pointer-events-none skill-label bg-black top-full mt-4 rounded-lg z-10 ${
          !isHovered && "inactive"
        }`}
      >
        <div className="relative flex text-lg tracking-wider font-light m-0 px-4 py-2 justify-center">
          <div className="absolute w-0 h-0 border-l-[12.5px] border-b-[15px] border-r-[12.5px] border-solid border-l-[transparent] border-r-[transparent] border-b-black -translate-y-full"></div>
          {label}
        </div>
      </div>
    </div>
  )
}
export default SkillIcon

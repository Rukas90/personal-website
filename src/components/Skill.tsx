import React, { useState } from "react"

interface Props {
  icon: string
  label: string
  dim?: boolean
  onHoverStateChange?: (newState: boolean) => void
}

const Skill = ({ icon, label, dim, onHoverStateChange }: Props) => {
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
        className={`interactable skill-icon ${
          dim && "opacity-50"
        }`}
        src={icon}
      />
      <div
        className={`absolute skill-label bg-black top-full mt-4 rounded-lg ${
          !isHovered && "inactive"
        }`}
      >
        <p className="relative flex text-lg tracking-wider font-light m-0 px-4 py-2 justify-center">
          <div className="absolute w-0 h-0 border-l-[12.5px] border-b-[15px] border-r-[12.5px] border-solid border-l-[transparent] border-r-[transparent] border-b-black -translate-y-full"></div>
          {label}
        </p>
      </div>
    </div>
  )
}
export default Skill

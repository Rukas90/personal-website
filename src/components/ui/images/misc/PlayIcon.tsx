import React from "react"
import useStyling from "src/components/contexts/Styling"
import { SvgIconProps } from "src/components/props/SvgIconProps"

const PlayIcon = ({ fill }: SvgIconProps) => {
  const style = useStyling()

  const color = fill || style.accentColor.hex

  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 -960 960 960"
      fill="none"
    >
      <path
        d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"
        fill={color}
      />
    </svg>
  )
}
export default PlayIcon

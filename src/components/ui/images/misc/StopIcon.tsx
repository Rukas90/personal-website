import React from "react"
import useStyling from "src/components/contexts/Styling"
import { SvgIconProps } from "src/components/props/SvgIconProps"

const StopIcon = ({ fill }: SvgIconProps) => {
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
        d="M320-640v320-320Zm-80 400v-480h480v480H240Zm80-80h320v-320H320v320Z"
        fill={color}
      />
    </svg>
  )
}
export default StopIcon

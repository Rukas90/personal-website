import React from "react"
import useStyling from "src/components/contexts/Styling"
import { SvgIconProps } from "src/components/props/SvgIconProps"

const LinkedinIcon = ({ fill }: SvgIconProps) => {
  const style = useStyling()
  const f = fill || style.iconColor.hex

  return (
    <svg
      className="feather feather-linkedin"
      fill="none"
      width="24"
      height="24"
      stroke={f}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect height="12" width="4" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
export default LinkedinIcon

import React from "react"
import { SvgIconProps } from "src/components/props/SvgIconProps"

const ArrowUpIcon = ({ fill = "#2DD4BF" }: SvgIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4 15.375L6 13.975L12 7.97498L18 13.975L16.6 15.375L12 10.775L7.4 15.375Z"
        fill={fill}
      />
    </svg>
  )
}
export default ArrowUpIcon

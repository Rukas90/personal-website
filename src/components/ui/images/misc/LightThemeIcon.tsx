import React from "react"
import { SvgIconProps } from "src/components/props/SvgIconProps"

const LightThemeIcon = ({ fill = "#2DD4BF" }: SvgIconProps) => {
  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.752 18L7.8607 15.6429L7.31368 15.2219C5.59395 13.8984 4.5 11.8726 4.5 9.6C4.5 5.62355 7.85787 2.4 12 2.4C16.1422 2.4 19.5 5.62355 19.5 9.6C19.5 11.8726 18.406 13.8984 16.6863 15.2219L16.1393 15.6429L15.248 18H8.752ZM7 20.4H17L18.25 17.0944C20.5362 15.335 22 12.6317 22 9.6C22 4.29806 17.5228 0 12 0C6.47715 0 2 4.29806 2 9.6C2 12.6317 3.46385 15.335 5.75 17.0944L7 20.4ZM15.75 24V21.6H8.25V24H15.75Z"
        fill="white"
      />
    </svg>
  )
}
export default LightThemeIcon

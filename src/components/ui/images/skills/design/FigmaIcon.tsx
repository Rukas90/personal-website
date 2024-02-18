import React from "react"
import useStyling from "src/components/contexts/Styling"

const FigmaIcon = () => {
  const style = useStyling()

  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 800 800"
      fill="none"
    >
      <path
        d="M400 47H282.5C217.607 47 165 99.6067 165 164.5C165 229.393 217.607 282 282.5 282M400 47V282M400 47H517.5C582.395 47 635 99.6067 635 164.5C635 229.393 582.395 282 517.5 282M282.5 282H400M282.5 282C217.607 282 165 334.605 165 399.5C165 464.395 217.607 517 282.5 517M400 282H517.5M400 282V517M517.5 282C582.395 282 635 334.605 635 399.5C635 464.395 582.395 517 517.5 517C452.605 517 400 464.395 400 399.5C400 334.605 452.605 282 517.5 282ZM400 517H282.5M400 517V634.5C400 699.395 347.395 752 282.5 752C217.607 752 165 699.395 165 634.5C165 569.605 217.607 517 282.5 517"
        stroke={style.iconColor.hex}
        strokeWidth="66.6667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default FigmaIcon

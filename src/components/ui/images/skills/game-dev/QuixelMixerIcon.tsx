import React from "react"
import useStyling from "src/components/contexts/Styling"

const QuixelMixerIcon = () => {
  const style = useStyling()

  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 150 150"
      fill="none"
    >
      <path
        d="M140 37.5L75 0L10 37.5V112.5L75 150L107.617 131.25L140 150V112.5L107.617 93.8672L75 112.617L42.3827 93.8672V56.25L75 37.3828L107.617 56.25V93.8672L140 75V37.5Z"
        fill={style.iconColor.hex}
      />
    </svg>
  )
}
export default QuixelMixerIcon

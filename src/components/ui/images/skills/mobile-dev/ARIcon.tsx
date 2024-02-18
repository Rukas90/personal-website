import React from "react"
import useStyling from "src/components/contexts/Styling"

const ARIcon = () => {
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
        d="M177.5 288.75L400 400M177.5 288.75V511.25L400 622.5M177.5 288.75L400 177.5L622.5 288.75M400 400L622.5 288.75M400 400V622.5M400 622.5L622.5 511.25V288.75M222 44H133C83.8466 44 44 83.8466 44 133V222M222 756H133C83.8466 756 44 716.155 44 667V578M578 44H667C716.155 44 756 83.8466 756 133V222M578 756H667C716.155 756 756 716.155 756 667V578"
        stroke={style.iconColor.hex}
        strokeWidth="66.6667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ARIcon

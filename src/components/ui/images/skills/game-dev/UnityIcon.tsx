import React from "react"
import useStyling from "src/components/contexts/Styling"

const UnityIcon = () => {
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
        d="M518.243 399.2L657.889 158.06L725.371 399.2L657.889 640.284L518.243 399.2ZM450.178 438.359L589.847 679.463L346.603 617.145L170.875 438.359H450.178ZM589.815 118.869L450.178 360.008H170.875L346.603 181.212L589.815 118.869ZM789.173 317.137L703.978 0.183594L385.986 85.1263L338.915 167.886L243.397 167.201L10.6465 399.222L243.397 631.188H243.407L338.882 630.481L386.022 713.24L703.978 798.17L789.173 481.275L740.792 399.2L789.173 317.137Z"
        fill={style.iconColor.hex}
      />
    </svg>
  )
}
export default UnityIcon

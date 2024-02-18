import React from "react"
import useStyling from "src/components/contexts/Styling"

const ThreeJSIcon = () => {
  const style = useStyling()

  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 2500 2500"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M664.975 2429.74L82 70.2598L2419 742.929L664.975 2429.74Z"
        stroke={style.iconColor.hex}
        strokeWidth="125"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1249.96 406.491L1541.28 1586.23L373.27 1249.89L1249.96 406.491Z"
        stroke={style.iconColor.hex}
        strokeWidth="85"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M960.476 1410.11L815.785 823.887L1396.06 990.402L960.476 1410.11ZM671.04 238.375L815.731 824.602L235.454 658.087L671.04 238.375ZM1831.54 572.551L1976.23 1158.78L1395.95 992.263L1831.54 572.551ZM960.544 1410.52L1105.24 1996.75L524.958 1830.23L960.544 1410.52Z"
        stroke={style.iconColor.hex}
        strokeWidth="85"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default ThreeJSIcon

import React from "react"
import { SkillSvgIconProps } from "../props/SkillSvgIconProps"
import { useTheme } from "src/components/contexts/ThemeContext"
import useStyling from "src/components/contexts/Styling"

const CSharpIcon = ({}: SkillSvgIconProps) => {
  const style = useStyling()
  const { isDark } = useTheme()

  const color = {
    highlight: isDark ? "#D8E0E6" : "#171717",
    midtone: isDark ? "#C7CED4" : "#141414",
    shadow: isDark ? "#B9BFC4" : "#121212",
  }
  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M727.452 596C732.724 586.53 736 575.862 736 566.281V233.717C736 224.136 732.727 213.469 727.452 204L400 400.001L727.452 596Z"
        fill={color.midtone}
      />
      <path
        d="M429.057 784.814L706.479 618.532C714.47 613.742 721.735 605.47 727 596.001L399.999 400L73 596.001C78.2657 605.47 85.5312 613.744 93.5206 618.532L370.942 784.814C386.922 794.395 413.077 794.395 429.057 784.814Z"
        fill={color.shadow}
      />
      <path
        d="M727 203.999C721.731 194.528 714.459 186.256 706.465 181.466L428.849 15.1854C412.858 5.60488 386.685 5.60488 370.693 15.1854L93.0783 181.466C77.0842 191.044 64 214.559 64 233.716V566.281C64 575.86 67.2721 586.53 72.5434 596L399.771 400L727 203.999Z"
        fill={color.highlight}
      />
      <path
        d="M401.2 624C277.025 624 176 523.514 176 400C176 276.486 277.025 176 401.2 176C479.847 176 553.291 217.319 593.958 284.13L497.516 341.942C477.14 308.608 440.46 288 401.2 288C339.11 288 288.601 338.243 288.601 400C288.601 461.757 339.11 512 401.2 512C440.357 512 476.942 491.507 497.353 458.33L594 515.805C553.342 582.655 479.872 624 401.2 624Z"
        fill={style.backgroundColor.hex}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M652.003 316V343.927H595.997V316H568.003V343.927H540V372H568.003V427.854H540V456H568.003V484H595.997L596 456H652.003V484H679.997V456H708V428H679.997V372H708V343.927H679.997V316H652.003ZM652.003 428V372H595.997V427.854L652.003 428Z"
        fill={style.backgroundColor.hex}
      />
    </svg>
  )
}
export default CSharpIcon

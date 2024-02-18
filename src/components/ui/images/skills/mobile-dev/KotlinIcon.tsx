import React from "react"
import { useTheme } from "src/components/contexts/ThemeContext"

const KotlinIcon = () => {
  const { isDark } = useTheme()

  const gradients = {
    primary: isDark
      ? {
          from: "#C0C7CC",
          to: "#B4BABF",
        }
      : {
          from: "#141414",
          to: "#131313",
        },
    secondary: isDark
      ? {
          from: "#BFC6CC",
          to: "#EFF8FF",
        }
      : {
          from: "#141414",
          to: "#191919",
        },
  }
  return (
    <svg
      className="pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 800 800"
      fill="none"
    >
      <g clipPath="url(#clip0_13_35)">
        <path
          d="M0 0V800H800V798.657L601.429 598.657L402.857 398.457L601.429 198.114L798.229 0H0Z"
          fill="url(#primary_gradient)"
        />
        <path
          d="M408.969 0L0 409.086V800H3.54184L403.656 399.771L402.77 398.886L601.256 198.571L798 0H408.969Z"
          fill="url(#secondary_gradient)"
        />
      </g>
      <defs>
        <linearGradient
          id="primary_gradient"
          x1="-8.92564"
          y1="807.881"
          x2="800.847"
          y2="-10.924"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradients.primary.from} />
          <stop offset="1" stopColor={gradients.primary.to} />
        </linearGradient>
        <linearGradient
          id="secondary_gradient"
          x1="-108.426"
          y1="680.309"
          x2="719.898"
          y2="-71.6415"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradients.secondary.from} />
          <stop offset="1" stopColor={gradients.secondary.to} />
        </linearGradient>
        <clipPath id="clip0_13_35">
          <rect width="800" height="800" fill="none" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default KotlinIcon

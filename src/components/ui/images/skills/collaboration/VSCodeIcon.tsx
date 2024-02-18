import React from "react"
import { useTheme } from "src/components/contexts/ThemeContext"
import useStyling from "src/components/contexts/Styling"

const VSCodeIcon = () => {
  const style = useStyling()
  const { isDark } = useTheme()

  const gradients = {
    front: {
      from: isDark ? "#E3EBF1" : "#232323",
      to: isDark ? "#DFE7ED" : "#222222",
    },
    aboveInner: {
      0o0: isDark ? "#A8AEB3" : "#1a1a1a",
      0o1: isDark ? "#ACB2B7" : "#1b1b1b",
      0o2: isDark ? "#AAB0B5" : "#1a1a1a",
      0o3: isDark ? "#A2A8AC" : "#191919",
      0o4: isDark ? "#A5AAAF" : "#191919",
      0o5: isDark ? "#A3A9AD" : "#191919",
    },
    belowInner: {
      from: isDark ? "#C5CDD2" : "#1f1f1f",
      to: isDark ? "#B9C0C5" : "#1d1d1d",
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
      <path
        d="M593.506 43.9112C593.506 19.5828 566.156 19.5825 554 22.6236C571.017 9.24291 590.974 12.4871 598.064 16.5418L762.409 96.7961C778.067 104.443 788 120.354 788 137.791V665.747C788 683.417 777.803 699.498 761.826 707.021L607.183 779.846C596.544 784.405 573.449 795.659 554 779.843C578.312 784.408 591.48 767.175 593.506 755.517V43.9112Z"
        fill="url(#front_gradient)"
        stroke={style.textColor.hex}
        strokeWidth="4"
      />
      <path
        d="M556.637 21.9423C569.478 19.4037 594 20.581 594 43.6657V225.371L98.0287 600.719C89.3595 607.281 77.159 606.19 69.7752 598.198L18.6582 542.864C10.6503 534.197 11.2106 520.628 19.9057 512.657L554.672 22.3809L556.637 21.9423Z"
        fill="url(#paint1_linear_23_99)"
        stroke={style.textColor.hex}
        strokeWidth="4"
      />
      <path
        d="M594 577.039L98.0287 201.286C89.3595 194.718 77.159 195.808 69.7752 203.809L18.6582 259.202C10.6503 267.879 11.2106 281.463 19.9057 289.445L554.672 780.248C578.873 784.814 591.983 767.565 594 755.896V577.039Z"
        fill="url(#paint2_linear_23_99)"
        stroke={style.textColor.hex}
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="front_gradient"
          x1="671.001"
          y1="13"
          x2="671.001"
          y2="788"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradients.front.from} />
          <stop offset="1" stopColor={gradients.front.to} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_23_99"
          x1="594"
          y1="110.56"
          x2="41.0892"
          y2="574.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradients.aboveInner[0]} />
          <stop offset="0.270551" stopColor={gradients.aboveInner[1]} />
          <stop offset="0.421376" stopColor={gradients.aboveInner[2]} />
          <stop offset="0.618197" stopColor={gradients.aboveInner[3]} />
          <stop offset="0.855344" stopColor={gradients.aboveInner[4]} />
          <stop offset="1" stopColor={gradients.aboveInner[5]} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_23_99"
          x1="44.9583"
          y1="233.863"
          x2="596.794"
          y2="690.114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={gradients.belowInner.from} />
          <stop offset="1" stopColor={gradients.belowInner.to} />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default VSCodeIcon

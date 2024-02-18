import React from "react"
import LightThemeIcon from "./images/misc/LightThemeIcon"
import { useTheme } from "../contexts/ThemeContext"
import DarkThemeIcon from "./images/misc/DarkThemeIcon"
import { GeneralProps } from "../props/GeneralProps"

const ThemeToggle = ({ className }: GeneralProps) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className={`lg:w-5 sm:w-7 w-6 interactable ${className}`}
      onClick={toggleTheme}
    >
      {isDark ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  )
}
export default ThemeToggle

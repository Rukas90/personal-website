import React, { createContext, useContext, useState, useEffect } from "react"
import { ChildrenProps } from "../props/ChildrenProps"

type ThemeContextType = {
  theme: string
  isDark: boolean

  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string>("light")

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark"
    updateTheme(theme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    updateTheme(newTheme)
  }

  const updateTheme = (theme: string) => {
    document.body.className = theme

    setTheme(theme)

    localStorage.setItem("theme", theme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === "dark", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

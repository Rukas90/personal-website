import React, { createContext, useContext, useState, useEffect } from "react"
import { ChildrenProps } from "../props/ChildrenProps"
import Cookies from "js-cookie"

type ThemeContextType = {
  theme: string
  isDark: boolean

  toggleTheme: () => void
}

const domain = import.meta.env.VITE_MAIN_DOMAIN
const environment = import.meta.env.VITE_NODE_ENV

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: ChildrenProps) => {
  const [theme, setTheme] = useState<string>("light")

  useEffect(() => {
    const theme = Cookies.get("theme") || "dark"
    updateTheme(theme)
  }, [])
  const toggleTheme = () => {
    updateTheme(theme === "light" ? "dark" : "light")
  }

  const updateTheme = (theme: string) => {
    document.body.className = theme
    const isLocalhost = environment === "development"
    setTheme(theme)
    Cookies.set("theme", theme, {
      path: "/",
      ...(isLocalhost ? {} : { domain }),
    })
  }
  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === "dark", toggleTheme }}>
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

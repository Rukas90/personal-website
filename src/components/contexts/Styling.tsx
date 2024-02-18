import { useTheme } from "./ThemeContext"

export type ThemeColor = {
  tailwind?: string
  hex?: string
}
export interface ThemeStyling {
  textColor: ThemeColor
  accentColor: ThemeColor
  accentDimColor: ThemeColor
  backgroundColor: ThemeColor
  iconColor: ThemeColor
}

const useStyling = (): ThemeStyling => {
  const { isDark } = useTheme()

  const styles = {
    light: {
      textColor: {
        tailwind: "text-black",
        hex: "#000000",
      },
      accentColor: {
        tailwind: "text-red-700",
        hex: "#b91c1c",
      },
      accentDimColor: {
        tailwind: "text-red-800",
        hex: "#991b1b",
      },
      backgroundColor: {
        tailwind: "bg-gray-100",
        hex: "#f3f4f6",
      },
      iconColor: {
        tailwind: undefined,
        hex: "#0f0f0f",
      },
    },
    dark: {
      textColor: {
        tailwind: "bg-white",
        hex: "#FFFFFF",
      },
      accentColor: {
        tailwind: "text-teal-400",
        hex: "#2dd4bf",
      },
      accentDimColor: {
        tailwind: "text-teal-500",
        hex: "#14b8a6",
      },
      backgroundColor: {
        tailwind: "bg-gray-950",
        hex: "#030712",
      },
      iconColor: {
        tailwind: undefined,
        hex: "#EFF8FF",
      },
    },
  }
  return isDark ? styles.dark : styles.light
}

export default useStyling

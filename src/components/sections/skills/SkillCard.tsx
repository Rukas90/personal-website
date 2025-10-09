import React, { ReactNode } from "react"
import { useTheme } from "src/components/contexts/ThemeContext"
import { GeneralProps } from "src/components/props/GeneralProps"

interface Props extends GeneralProps {
  title: ReactNode | string
  text: string
}

const SkillCard = ({ title, text, className }: Props) => {
  const { isDark } = useTheme()

  return (
    <div
      className={`p-8 skill-bg text-sm font-light ${
        isDark ? "shadow-2xl" : "shadow-lg"
      } ${className}`}
    >
      <div className="pointer-events-none">
        <p className="font-medium tracking-wide uppercase text-lg xl:text-md">
          {title}
        </p>
        <div className="dark:text-teal-600 text-black text-3xl sm:text-4xl tracking-widest mb-4">
          ..
        </div>
        {text}
      </div>
    </div>
  )
}
export default SkillCard

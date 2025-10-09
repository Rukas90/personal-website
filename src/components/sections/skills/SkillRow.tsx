import React, { ReactNode } from "react"

interface Props {
    icon: ReactNode
    label: string
}
const SkillRow = ({icon, label}: Props) => {
  return (
    <div className="flex items-center gap-3 bg-gray-950 px-3 py-2 rounded">
      <div className="size-6">
        {icon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  )
}
export default SkillRow
import React from "react"
import { TagItemProps } from "src/components/props/TagItemProps"

interface Props extends TagItemProps {
  isSelected?: boolean
  onSelect?: () => void
}

const TagItem = ({ label, isSelected, onSelect }: Props) => {
  return (
    <li
      className={`${
        isSelected ? "bg-teal-500 text-black" : "bg-dark-950-darker"
      }  px-4 py-2 cursor-pointer rounded-md transition-colors select-none`}
      onClick={onSelect}
    >
      {label}
    </li>
  )
}
export default TagItem

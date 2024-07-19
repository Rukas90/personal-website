import React from "react"

interface Props {
  active: boolean
  id: string
  label: string
}
const HeaderNavItem = ({ active, id, label }: Props) => {
  return (
    <li
      className={`interactable navigation-btn ${
        active && "active dark:text-white text-black"
      } transition-all px-5 py-2 dark:hover:text-gray-200 hover:text-gray-800`}
    >
      <a className="interactable" href={`#${id}`}>
        {label}
      </a>
    </li>
  )
}
export default HeaderNavItem

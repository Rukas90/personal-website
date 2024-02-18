import React from "react"

interface Props {
  label: string
  active?: boolean
}

const HeaderNavItem = ({ label, active }: Props) => {
  return (
    <li
      className={`interactable navigation-btn ${
        active && "active dark:text-white text-black"
      } transition-all px-5 py-2 dark:hover:text-gray-200 hover:text-gray-800`}
    >
      {label}
    </li>
  )
}
export default HeaderNavItem

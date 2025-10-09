import React from "react"
import { formatFirstUpperChar } from "src/utils/FormattingUtils"

interface Props {
  activeId: string
  id: string
}
const HeaderNavItem = ({ activeId, id }: Props) => {
  return (
    <li
      className={`interactable navigation-btn ${
        activeId === id && "active dark:text-white text-black"
      } transition-all px-5 py-2 dark:hover:text-gray-200 hover:text-gray-800`}
    >
      <a className="interactable" href={`/#${id}`}>
        {formatFirstUpperChar(id)}
      </a>
    </li>
  )
}
export default HeaderNavItem

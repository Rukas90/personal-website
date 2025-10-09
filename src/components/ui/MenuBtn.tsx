import React from "react"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends GeneralProps {
  size?: null | "big"
  mode?: null | "list" | "close"
  onClick?: () => void
}

const MenuBtn = ({ size, mode, onClick, className }: Props) => {
  return (
    <button
      aria-label="Menu"
      className={`${className} interactable menu-btn${
        size ? `-${size}` : ""
      } ${mode} flex fade-in flex-col justify-between`}
      onClick={onClick}
    >
      <div className="menu-line-top pointer-events-none"></div>
      <div className="menu-line-middle pointer-events-none"></div>
      <div className="menu-line-bottom pointer-events-none"></div>
    </button>
  )
}
export default MenuBtn

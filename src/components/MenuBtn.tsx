import React from "react"

interface Props {
  size?: null | "big"
  mode?: null | "list" | "close"
  interactable?: boolean
}

const MenuBtn = ({ size, mode, interactable = true }: Props) => {
  return (
    <div
      className={`menu-btn${
        size ? `-${size}` : ""
      } ${mode} flex fade-in flex-col justify-between pointer-events-${
        interactable ? "auto" : "none"
      }`}
    >
      <div className="menu-line-top"></div>
      <div className="menu-line-middle"></div>
      <div className="menu-line-bottom"></div>
    </div>
  )
}
export default MenuBtn

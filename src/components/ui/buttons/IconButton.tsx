import React, { ReactElement } from "react"
import { IconButtonProps } from "../../props/IconBtnProps"

interface Props extends IconButtonProps {
  icon: ReactElement
  overrideSize?: boolean
}

const IconButton = ({ icon, url, onClick, className, hidden, overrideSize }: Props) => {
  const node = (
    <div
      className={`interactable transition-transform pointer-events-auto ${className}`}
    >
      <div
        className={`relative icon-btn ${!overrideSize && "default"} pointer-events-none ${
          hidden ? "inactive" : ""
        }`}
      >
        {icon}
      </div>
    </div>
  )
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {node}
      </a>
    )
  } else {
    return (
      <button onClick={onClick} className="icon-button">
        {node}
      </button>
    )
  }
}
export default IconButton

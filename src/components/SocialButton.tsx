import React from "react"

interface Props {
  icon: string
  url: string
  hidden?: boolean
}

const SocialButton = ({ icon, url, hidden }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="interactable transition-transform py-6 pointer-events-auto hover:scale-150">
        <img
          src={icon}
          className={`social-btn pointer-events-none ${hidden && "inactive"}`}
        />
      </div>
    </a>
  )
}
export default SocialButton

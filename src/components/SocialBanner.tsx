import React, { useState } from "react"
import MenuBtn from "./MenuBtn"
import SocialButton from "./SocialButton"
import GithubIcon from "img/social/github.svg"
import LinkedinIcon from "img/social/linkedin.svg"
import UnityIcon from "img/social/unity.svg"
import CodePenIcon from "img/social/codepen.svg"

const SocialBanner = () => {
  const [isVisible, setVisible] = useState(false)

  const onMouseOver = (_: any) => setVisible(true)
  const onMouseLeave = (_: any) => setVisible(false)

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="absolute p-20 bottom-0 right-0 flex flex-col gap-8 items-center pointer-events-auto interactable"
    >
      <div>
        <SocialButton
          icon={CodePenIcon}
          url="https://codepen.io/Rukas-Skirkevicius"
          hidden={!isVisible}
        />
        <SocialButton
          icon={GithubIcon}
          url="https://github.com/Rukas90/"
          hidden={!isVisible}
        />
        <SocialButton
          icon={LinkedinIcon}
          url="https://www.linkedin.com/in/rukas-skirkevicius-a405101b7/"
          hidden={!isVisible}
        />
        <SocialButton
          icon={UnityIcon}
          url="https://assetstore.unity.com/publishers/8326"
          hidden={!isVisible}
        />
      </div>
      <div
        className={`interactable social-line bg-gray-700 ${
          !isVisible && "inactive"
        }`}
      />
      <MenuBtn mode={isVisible ? "close" : "list"} interactable={false} />
    </div>
  )
}
export default SocialBanner

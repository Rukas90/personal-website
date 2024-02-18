import React, { useState } from "react"
import MenuBtn from "src/components/ui/MenuBtn"
import CodePenBtn from "./buttons/CodePenBtn"
import GitHubBtn from "./buttons/GitHubBtn"
import LinkedInBtn from "./buttons/LinkedInBtn"
import UnityBtn from "./buttons/UnityBtn"

const SocialBanner = () => {
  const [isVisible, setVisible] = useState(false)

  const onMouseOver = (_: any) => setVisible(true)
  const onMouseLeave = (_: any) => setVisible(false)

  const hoverBtnClass = "hover:scale-150"

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="absolute p-20 bottom-0 right-0 flex flex-col gap-8 items-center pointer-events-auto interactable"
    >
      <div>
        <CodePenBtn className={`${hoverBtnClass} pb-6`} hidden={!isVisible} />
        <GitHubBtn className={`${hoverBtnClass} py-6`} hidden={!isVisible} />
        <LinkedInBtn className={`${hoverBtnClass} py-6`} hidden={!isVisible} />
        <UnityBtn className={`${hoverBtnClass} pt-6`} hidden={!isVisible} />
      </div>
      <div
        className={`interactable social-line bg-gray-700 ${
          !isVisible && "inactive"
        }`}
      />
      <MenuBtn mode={isVisible ? "close" : "list"} />
    </div>
  )
}
export default SocialBanner

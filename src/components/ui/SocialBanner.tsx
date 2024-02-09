import React, { useState } from "react"
import MenuBtn from "src/components/ui/MenuBtn"
import CodePenBtn from "./buttons/derives/CodePenBtn"
import GitHubBtn from "./buttons/derives/GitHubBtn"
import LinkedInBtn from "./buttons/derives/LinkedInBtn"
import UnityBtn from "./buttons/derives/UnityBtn"

const SocialBanner = () => {
  const [isVisible, setVisible] = useState(false)

  const onMouseOver = (_: any) => setVisible(true)
  const onMouseLeave = (_: any) => setVisible(false)

  const hoverBtnClass = "hover:scale-150"

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className="absolute p-10 2xl:p-20 bottom-0 right-0 flex flex-col gap-8 items-center pointer-events-auto interactable"
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
      <MenuBtn mode={isVisible ? "close" : "list"} interactable={false} />
    </div>
  )
}
export default SocialBanner

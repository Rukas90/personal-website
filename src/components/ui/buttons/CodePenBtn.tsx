import React from "react"
import CodePenIcon from "src/components/ui/images/social/CodePenIcon"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"

const CodePenBtn = ({
  url = "https://codepen.io/Rukas-Skirkevicius",
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <IconButton
      icon={<CodePenIcon {...svg} />}
      className={className}
      url={url}
      hidden={hidden}
    />
  )
}
export default CodePenBtn

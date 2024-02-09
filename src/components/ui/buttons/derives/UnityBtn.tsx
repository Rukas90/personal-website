import React from "react"
import UnityIcon from "src/components/ui/images/social/UnityIcon"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"

const UnityBtn = ({
  url = "https://assetstore.unity.com/publishers/8326",
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <>
      <IconButton
        icon={<UnityIcon {...svg} />}
        className={className}
        url={url}
        hidden={hidden}
      />
    </>
  )
}
export default UnityBtn

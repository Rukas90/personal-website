import React from "react"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"
import YouTubeIcon from "../images/social/YouTubeIcon"

const YouTubeBtn = ({
  url,
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <IconButton
      icon={<YouTubeIcon {...svg} />}
      className={className}
      url={url}
      hidden={hidden}
    />
  )
}
export default YouTubeBtn

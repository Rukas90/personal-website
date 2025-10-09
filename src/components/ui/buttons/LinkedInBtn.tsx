import React from "react"
import LinkedinIcon from "src/components/ui/images/social/LinkedinIcon"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"

const LinkedInBtn = ({
  url = "https://www.linkedin.com/in/rukas-skirkevicius-a405101b7/",
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <IconButton
      icon={<LinkedinIcon {...svg} />}
      className={className}
      url={url}
      hidden={hidden}
    />
  )
}
export default LinkedInBtn

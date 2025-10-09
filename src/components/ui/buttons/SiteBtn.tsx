import React from "react"
import SiteIcon from "src/components/ui/images/social/SiteIcon"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"

const SiteBtn = ({ url, className, svg, hidden }: IconButtonProps) => {
  return (
    <IconButton
      icon={<SiteIcon {...svg} />}
      className={className}
      url={url}
      hidden={hidden}
    />
  )
}
export default SiteBtn

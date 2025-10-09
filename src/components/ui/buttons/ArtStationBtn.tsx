import React from "react"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"
import ArtStationIcon from "../images/social/ArtStationIcon"

const ArtStationBtn = ({
  url = "https://www.artstation.com/thatmistguy",
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <IconButton
      icon={<ArtStationIcon {...svg} />}
      className={className}
      url={url}
      hidden={hidden}
    />
  )
}
export default ArtStationBtn

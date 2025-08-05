import React from "react"
import GithubIcon from "src/components/ui/images/social/GitHubIcon"
import IconButton from "src/components/ui/buttons/IconButton"
import { IconButtonProps } from "src/components/props/IconBtnProps"

const GitHubBtn = ({
  url = "https://github.com/Rukas90/",
  className,
  svg,
  hidden,
}: IconButtonProps) => {
  return (
    <>
      <IconButton
        icon={<GithubIcon {...svg} />}
        className={className}
        url={url}
        hidden={hidden}
      />
    </>
  )
}
export default GitHubBtn

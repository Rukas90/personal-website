import React from "react"
import useStyling, { ThemeStyling } from "src/components/contexts/Styling"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import { Link } from "src/types/Link"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"
import UnityBtn from "src/components/ui/buttons/UnityBtn"
import SiteBtn from "src/components/ui/buttons/SiteBtn"
import GitHubBtn from "src/components/ui/buttons/GitHubBtn"
import CodePenBtn from "src/components/ui/buttons/CodePenBtn"

interface Props extends SkeletonProps {
  links: Link[]
}

const ButtonComponents = {
  github: GitHubBtn,
  site: SiteBtn,
  unity: UnityBtn,
  codepen: CodePenBtn,
}
const GetButtonComponent = (type: string) => {
  const key = type.toLowerCase()

  if (key in ButtonComponents) {
    return ButtonComponents[key as keyof typeof ButtonComponents]
  }
  return null
}

const CreateSocialBtn = (link: Link, key: React.Key, style: ThemeStyling) => {
  const classes = "scale-75 hover:scale-125"
  const fill = style.accentColor.hex

  const ButtonComponent = GetButtonComponent(link.type)

  return ButtonComponent ? (
    <ButtonComponent
      key={key}
      svg={{ fill }}
      className={classes}
      url={link.url}
    />
  ) : null
}

const Links = ({ showSkeleton, links }: Props) => {
  const style = useStyling()

  return (
    <div className="flex gap-x-4 fade-up items-center">
      {showSkeleton ? (
        <RectangleSkeleton className="w-24 h-6" />
      ) : (
        <>
          {Array.isArray(links)
            ? links.map((link, index) =>
                CreateSocialBtn(link, `link-${index}`, style)
              )
            : null}
        </>
      )}
    </div>
  )
}
export default Links

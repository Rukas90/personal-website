import React, { HTMLAttributeAnchorTarget } from "react"
import useStyling from "src/components/contexts/Styling"
import { GeneralProps } from "src/components/props/GeneralProps"

interface Props extends GeneralProps {
  label: string
  url: string
  target?: HTMLAttributeAnchorTarget
}
const LinkText = (props: Props) => {
  const styling = useStyling()
  return (
    <a href={props.url} target={props.target}>
      <p
        className={`link-text ${styling.accentColor.tailwind} ${props.className} interactable`}
      >
        {props.label}
      </p>
    </a>
  )
}
export default LinkText

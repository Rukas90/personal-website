import React from "react"
import { ChildrenProps } from "props/ChildrenProps"
import { GeneralProps } from "props/GeneralProps"
import PlainText from "./PlainText"

interface Props extends ChildrenProps, GeneralProps {}

const TextBlock = ({ children, className }: Props) => {
  return (
    <PlainText
      className={`dark:font-light font-normal text-sm sm:text-base ${className}`}
    >
      {children}
    </PlainText>
  )
}
export default TextBlock

import React from "react"
import { ChildrenProps } from "props/ChildrenProps"
import { GeneralProps } from "props/GeneralProps"
import TextBlock from "./TextBlock"

interface Props extends ChildrenProps, GeneralProps {}

const ParagraphBlock = ({ children, className }: Props) => {
  return (
    <TextBlock className={`tracking-wider leading-8 ${className}`}>
      {children}
    </TextBlock>
  )
}
export default ParagraphBlock

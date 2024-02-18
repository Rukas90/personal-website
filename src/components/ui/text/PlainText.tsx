import React from "react"
import { ChildrenProps } from "props/ChildrenProps"
import { GeneralProps } from "props/GeneralProps"

interface Props extends ChildrenProps, GeneralProps {}

const PlainText = ({ children, className }: Props) => {
  return (
    <div className={`dark:text-gray-200 text-gray-950 ${className}`}>
      {children}
    </div>
  )
}
export default PlainText

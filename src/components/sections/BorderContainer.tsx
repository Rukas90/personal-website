import React from "react"
import { ChildrenProps } from "../props/ChildrenProps"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends ChildrenProps, GeneralProps {}

const BorderContainer = ({ children, className }: Props) => {
  return (
    <div
      className={`content-container mx-auto px-4 tn:px-8 xl:px-16 ${className}`}
    >
      {children}
    </div>
  )
}
export default BorderContainer

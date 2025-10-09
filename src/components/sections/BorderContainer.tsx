import React from "react"
import { ChildrenProps } from "../props/ChildrenProps"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends ChildrenProps, GeneralProps {
  applyMargin?: boolean
  applyPadding?: boolean
}
const BorderContainer = ({
  children,
  className,
  applyMargin = true,
  applyPadding = true,
}: Props) => {
  return (
    <div
      className={`${applyMargin && "mx-auto"} ${
        applyPadding && "px-4 tn:px-8 xl:px-16"
      } !max-w-[90rem] w-full ${className}`}
    >
      {children}
    </div>
  )
}
export default BorderContainer

import React from "react"
import { ChildrenProps } from "props/ChildrenProps"
import { GeneralProps } from "props/GeneralProps"

interface Props extends ChildrenProps, GeneralProps {
  overridesColor?: boolean
}

const PlainText = ({ overridesColor = false, children, className }: Props) => {
  return (
    <div
      className={`${
        !overridesColor && "dark:text-gray-200 text-gray-950"
      } ${className}`}
    >
      {children}
    </div>
  )
}
export default PlainText

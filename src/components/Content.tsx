import React from "react"
import { ChildrenProps } from "./props/ChildrenProps"

const Content = ({ children }: ChildrenProps) => {
  return (
    <div className="content min-h-dvh w-full flex flex-col tracking-wider justify-center dark:text-gray-100 text-black text-center">
      {children}
    </div>
  )
}
export default Content

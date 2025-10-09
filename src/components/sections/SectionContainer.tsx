import React, { useRef } from "react"
import SectionLabel from "./SectionLabel"
import BorderContainer from "./BorderContainer"
import { ChildrenProps } from "../props/ChildrenProps"
import useElementReveal from "../hooks/useElementReveal"

interface Props extends ChildrenProps {
  label: string
  borders?: boolean
  applyPadding?: boolean
}

const SectionContainer = ({ label, children, borders = true }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  useElementReveal(ref)

  const Component = borders ? BorderContainer : "div"

  return (
    <div
      ref={ref}
      className={`reveal section-container pt-12 xl:pt-32 pb-14 w-full`}
    >
      <Component>
        <SectionLabel text={label || ""} />
        {children}
      </Component>
    </div>
  )
}
export default SectionContainer

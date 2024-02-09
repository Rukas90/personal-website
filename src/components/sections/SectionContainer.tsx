import React, { ReactNode } from "react"
import SectionLabel from "./SectionLabel"

interface Props {
  label: string
  children: ReactNode
}

const SectionContainer = ({ label, children }: Props) => {
  return (
    <div className="section-container pt-12 xl:pt-32 pb-16 w-full">
      <SectionLabel text={label} />
      {children}
    </div>
  )
}
export default SectionContainer

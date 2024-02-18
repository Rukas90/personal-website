import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"

const RectangleSkeleton = ({ className }: GeneralProps) => {
  return <div className={`skeleton shimmer ${className}`}></div>
}
export default RectangleSkeleton

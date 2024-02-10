import React from "react"

interface Props {
  className?: string
}

const RectangleSkeleton = ({ className }: Props) => {
  return <div className={`skeleton shimmer ${className}`}></div>
}
export default RectangleSkeleton

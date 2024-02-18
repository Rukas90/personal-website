import React from "react"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"

interface Props {
  showSkeleton?: boolean
  label?: string
}

const Label = ({ showSkeleton, label }: Props) => {
  return (
    <div className="flex gap-4 justify-end w-full mb-2">
      {showSkeleton ? (
        <RectangleSkeleton className="w-24 h-4" />
      ) : (
        <div className="fade-left dark:font-bold font-medium text-xs dark:bg-teal-400 bg-red-600 dark:text-gray-950 text-white px-4 py-1 rounded-3xl">
          {label}
        </div>
      )}
    </div>
  )
}
export default Label

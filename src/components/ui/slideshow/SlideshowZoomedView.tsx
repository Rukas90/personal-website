import React, { ReactNode } from "react"
import RectangleSkeleton from "../skeletons/RectangleSkeleton"
import { GalleryData } from "src/components/props/PictureData"

interface Props {
    showSkeleton?: boolean
    gallery?: GalleryData
    closeZoomedView: () => void
    displayGalleryEntry: (className?: string) => ReactNode
}
const SlideshowZoomedView = ({ showSkeleton, closeZoomedView, displayGalleryEntry, gallery }: Props) => {
  return (
    <div
      onClick={closeZoomedView}
      className="pointer-events-auto fade-in flex justify-center backdrop-blur-sm pt-[110px] items-center w-full h-full bg-[rgba(0,0,0,0.5)]"
    >
      {showSkeleton || !gallery ? (
        <RectangleSkeleton className="max-w-full scale-in max-h-full min-h-48 min-w-48 lg:px-48 md:px-24 sm:px-12 px-6 py-12 pointer-events-none" />
      ) : (
        displayGalleryEntry(
          "max-w-full scale-in max-h-full min-h-48 min-w-48 lg:px-48 md:px-24 sm:px-12 px-6 py-12 pointer-events-none"
        )
      )}
    </div>
  )
}
export default SlideshowZoomedView

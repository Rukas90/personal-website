import React from "react"
import { SlideshowProps } from "props/SlideshowProps"
import SlideshowArrow from "./SlideshowArrow"
import RectangleSkeleton from "../skeletons/RectangleSkeleton"
import ZoomInIcon from "../images/misc/ZoomInIcon"
import GalleryAutoButton from "./GalleryAutoButton"
import { GalleryEntryType } from "src/components/props/PictureData"
import { GalleryViewState } from "../../hooks/useGallery"

interface Props extends SlideshowProps {
  state: GalleryViewState
}
const Slideshow = ({
  showSkeleton = false,
  gallery,
  state,
}: Props) => {
  return (
    <>
      <div className="relative slideshow shimmer scale-in shadow-2xl pointer-events-none aspect-[3/2] bg-gray-500 rounded-md">
        {showSkeleton || !gallery ? (
          <RectangleSkeleton className="h-96" />
        ) : (
          state.displayGalleryEntry("rounded-md")
        )}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between overflow-hidden rounded-md">
          <GalleryAutoButton
            enabled={state.autoEnabled}
            onToggleEnabled={() => state.toggleAutoState()}
            startTime={state.timeoutDate}
            delay={state.delay}
            className="absolute right-4 top-4"
          />
          <SlideshowArrow onClick={state.viewPrevious} />
          {state.currentEntry &&
            GalleryEntryType.isImage(state.currentEntry) && (
              <button
                onClick={() => state.setZoomed(true)}
                className="interactable w-12 h-12 my-auto drop-shadow-[0_0_1.0rem_rgba(0,0,0,1.0)] transition-opacity hover:opacity-85 opacity-15 pointer-events-auto"
              >
                <ZoomInIcon fill="white" />
              </button>
            )}
          <SlideshowArrow onClick={state.viewNext} isLeft />
        </div>
      </div>
    </>
  )
}
export default Slideshow

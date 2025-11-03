import React, { useEffect, useRef, useState } from "react"
import { SlideshowProps } from "props/SlideshowProps"
import SlideshowArrow from "./SlideshowArrow"
import RectangleSkeleton from "../skeletons/RectangleSkeleton"
import ZoomInIcon from "../images/misc/ZoomInIcon"
import { useForeground } from "src/components/contexts/ForegroundContext"
import SlideshowAutoButton from "./SlideshowAutoButton"
import ImagePicture from "../ImagePicture"
import { GalleryEntryType } from "src/components/props/PictureData"
import VideoPlayer from "../VideoPlayer"
import SlideshowZoomedView from "./SlideshowZoomedView"

const Slideshow = ({
  showSkeleton = false,
  gallery,
  entryIndex,
  setEntryIndex,
}: SlideshowProps) => {
  const { setOverlayContent } = useForeground()
  const [zoomed, setZoomed] = useState(false)
  const [autoEnabled, setAutoEnabled] = useState(
    (gallery && gallery.entries && gallery.entries.length > 1) ?? true
  )
  const timeoutRef = useRef<number | null>(null)
  const [timeoutDate, setTimeoutDate] = useState<number | null>(null)

  const displayGalleryEntry = (className?: string) => {
    const entry = gallery?.entries[entryIndex]

    if (!entry) {
      return <></>
    }
    if (GalleryEntryType.isImage(entry)) {
      return (
        <ImagePicture
          path={gallery.path}
          extensions={gallery.extensions}
          file={entry}
          className={className}
        />
      )
    }
    if (GalleryEntryType.isVideo(entry)) {
      return (
        <VideoPlayer
          video={entry}
          onPlay={() => setAutoEnabled(false)}
          className={`${className} w-full h-full pointer-events-auto`}
        />
      )
    }
  }

  const TIMEOUT_DELAY = 6000

  useEffect(() => {
    setOverlayContent(
      zoomed ? (
        <SlideshowZoomedView
          showSkeleton={showSkeleton}
          gallery={gallery}
          closeZoomedView={() => setZoomed(false)}
          displayGalleryEntry={displayGalleryEntry}
        />
      ) : null
    )
    updateTimeout()
  }, [zoomed])

  useEffect(() => updateTimeout(), [])

  const viewPrevious = () => {
    setEntryIndex((current) => {
      if (!gallery) {
        return -1
      }
      const newIndex = current - 1
      return newIndex < 0 ? gallery.entries.length - 1 : newIndex
    })
    updateTimeout()
  }
  const viewNext = () => {
    setEntryIndex((current) => {
      if (!gallery) {
        return -1
      }
      const newIndex = current + 1
      return newIndex >= gallery.entries.length ? 0 : newIndex
    })
    updateTimeout()
  }

  const clearTimeout = () => {
    setTimeoutDate(null)

    if (!timeoutRef.current) {
      return
    }
    window.clearTimeout(timeoutRef.current)
  }
  const updateTimeout = () => {
    clearTimeout()

    if (zoomed || !autoEnabled) {
      return
    }
    setTimeout()
  }
  const setTimeout = () => {
    timeoutRef.current = window.setTimeout(viewNext, TIMEOUT_DELAY)
    setTimeoutDate(Date.now())
  }
  const setAutoState = (state: boolean) => {
    setAutoEnabled((current) => {
      if (current === state) {
        return state
      }
      clearTimeout()

      if (state) {
        setTimeout()
      }
      return state
    })
  }
  return (
    <>
      <div className="relative slideshow shimmer scale-in shadow-2xl pointer-events-none aspect-[3/2] bg-gray-500 rounded-md">
        {showSkeleton || !gallery ? (
          <RectangleSkeleton className="h-96" />
        ) : (
          displayGalleryEntry("rounded-md")
        )}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between overflow-hidden rounded-md">
          <SlideshowAutoButton
            enabled={autoEnabled}
            onToggleEnabled={() => setAutoState(!autoEnabled)}
            startTime={timeoutDate}
            delay={TIMEOUT_DELAY}
          />
          <SlideshowArrow onClick={viewPrevious} />
          {gallery && GalleryEntryType.isImage(gallery.entries[entryIndex]) && (
            <button
              onClick={() => setZoomed(true)}
              className="interactable w-12 h-12 my-auto drop-shadow-[0_0_1.0rem_rgba(0,0,0,1.0)] transition-opacity hover:opacity-85 opacity-15 pointer-events-auto"
            >
              <ZoomInIcon fill="white" />
            </button>
          )}
          <SlideshowArrow onClick={viewNext} isLeft />
        </div>
      </div>
    </>
  )
}
export default Slideshow

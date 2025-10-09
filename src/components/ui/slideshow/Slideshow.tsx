import React, { useEffect, useRef, useState } from "react"
import { SlideshowProps } from "props/SlideshowProps"
import SlideshowArrow from "./SlideshowArrow"
import RectangleSkeleton from "../skeletons/RectangleSkeleton"
import ZoomInIcon from "../images/misc/ZoomInIcon"
import { useForeground } from "src/components/contexts/ForegroundContext"
import SlideshowAutoButton from "./SlideshowAutoButton"
import ImagePicture from "../Picture"

const Slideshow = ({ showSkeleton = false, images }: SlideshowProps) => {
  // Hooks and Refs

  const { setOverlayContent } = useForeground()
  const [zoomed, setZoomed] = useState(false)
  const [autoEnabled, setAutoEnabled] = useState(
    (images && images.files && images.files.length > 1) ?? true
  )
  const [imageIndex, setImageIndex] = useState(0)
  const timeoutRef = useRef<number | null>(null)
  const [timeoutDate, setTimeoutDate] = useState<number | null>(null)

  // Constants

  const TIMEOUT_DELAY = 6000

  // Zoom

  const closeZoomedView = () => {
    setZoomed(false)
  }
  const zoomIn = () => {
    setZoomed(true)
  }
  const zoomedInNode = (
    <div
      onClick={closeZoomedView}
      className="pointer-events-auto fade-in flex justify-center backdrop-blur-sm pt-[110px] items-center w-full h-full bg-[rgba(0,0,0,0.5)]"
    >
      {showSkeleton || !images ? (
        <RectangleSkeleton className="max-w-full scale-in max-h-full min-h-48 min-w-48 lg:px-48 md:px-24 sm:px-12 px-6 py-12 pointer-events-none" />
      ) : (
        <ImagePicture
          path={images.path}
          extensions={images.extensions}
          file={images.files[imageIndex]}
          className="max-w-full scale-in max-h-full min-h-48 min-w-48 lg:px-48 md:px-24 sm:px-12 px-6 py-12 pointer-events-none"
        />
      )}
    </div>
  )

  useEffect(() => {
    setOverlayContent(zoomed ? zoomedInNode : null)
    updateTimeout()
  }, [zoomed, zoomedInNode])

  useEffect(() => updateTimeout(), [])

  // Toogle functions

  const viewPrevious = () => {
    setImageIndex((current) => {
      if (!images) {
        return -1
      }
      const newIndex = current - 1
      return newIndex < 0 ? images.files.length - 1 : newIndex
    })
    updateTimeout()
  }
  const viewNext = () => {
    setImageIndex((current) => {
      if (!images) {
        return -1
      }
      const newIndex = current + 1
      return newIndex >= images.files.length ? 0 : newIndex
    })
    updateTimeout()
  }

  // Auto feature

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
  const toggleAutoState = () => {
    setAutoEnabled((current) => {
      const newState = !current

      clearTimeout()

      if (newState) {
        setTimeout()
      }
      return newState
    })
  }

  return (
    <>
      <div className="relative slideshow shimmer scale-in shadow-2xl pointer-events-none aspect-[3/2] bg-gray-500 rounded-md">
        {showSkeleton || !images ? (
          <RectangleSkeleton className="h-96" />
        ) : (
          <ImagePicture
            path={images.path}
            extensions={images.extensions}
            file={images.files[imageIndex]}
            className="rounded-md"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between overflow-hidden rounded-md">
          <SlideshowAutoButton
            enabled={autoEnabled}
            onToggleEnabled={toggleAutoState}
            startTime={timeoutDate}
            delay={TIMEOUT_DELAY}
          />
          <SlideshowArrow onClick={viewPrevious} />
          <button
            onClick={zoomIn}
            className="interactable w-12 h-12 my-auto drop-shadow-[0_0_1.0rem_rgba(0,0,0,1.0)] transition-opacity hover:opacity-65 opacity-0 pointer-events-auto"
          >
            <ZoomInIcon fill="white" />
          </button>
          <SlideshowArrow onClick={viewNext} isLeft />
        </div>
      </div>
    </>
  )
}
export default Slideshow

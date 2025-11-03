import React, { ReactNode, useEffect, useRef, useState } from "react"
import { useForeground } from "src/components/contexts/ForegroundContext"
import {
  GalleryData,
  GalleryEntry,
  GalleryEntryType,
} from "src/components/props/PictureData"
import ImagePicture from "../ui/ImagePicture"
import VideoPlayer from "../ui/VideoPlayer"
import SlideshowZoomedView from "../ui/slideshow/SlideshowZoomedView"

export type GalleryViewState = {
  viewNext: () => void
  viewPrevious: () => void
  timeoutDate: number | null
  delay: number
  zoomed: boolean
  setZoomed: React.Dispatch<React.SetStateAction<boolean>>
  autoEnabled: boolean
  setAutoState: (state: boolean) => void
  toggleAutoState: () => void
  displayGalleryEntry: (className: string) => ReactNode
  currentEntry: GalleryEntry | undefined
}
const useGallery = (
  entryIndex: number,
  setEntryIndex: React.Dispatch<React.SetStateAction<number>>,
  showSkeleton?: boolean,
  gallery?: GalleryData
) => {
  const { setOverlayContent } = useForeground()

  const timeoutRef = useRef<number | null>(null)

  const [timeoutDate, setTimeoutDate] = useState<number | null>(null)
  const [autoEnabled, setAutoEnabled] = useState(
    (gallery && gallery.entries && gallery.entries.length > 1) ?? true
  )
  const [zoomed, setZoomed] = useState(false)

  const TIMEOUT_DELAY = 6000

  useEffect(() => {
    updateTimeout()

    return () => {
      clearTimeout()
    }
  }, [])
  useEffect(() => {
    updateTimeout()
  }, [autoEnabled])

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
      return state
    })
  }
  const toggleAutoState = () => {
    setAutoEnabled((current) => {
      return !current
    })
  }
  return {
    viewNext,
    viewPrevious,
    timeoutDate,
    delay: TIMEOUT_DELAY,
    zoomed,
    setZoomed,
    autoEnabled,
    setAutoState,
    toggleAutoState,
    displayGalleryEntry,
    currentEntry: gallery?.entries[entryIndex],
  } as GalleryViewState
}
export default useGallery

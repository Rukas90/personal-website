import React from "react"
import { SlideshowProps } from "src/components/props/SlideshowProps"
import Slideshow from "src/components/ui/slideshow/Slideshow"
import { GalleryViewState } from "src/components/hooks/useGallery"
import clsx from "clsx"

interface Props extends SlideshowProps {
  reverse: boolean
  entryIndex: number
  setEntryIndex: React.Dispatch<React.SetStateAction<number>>
  state: GalleryViewState
}
const FeaturedProjectBanner = ({
  showSkeleton = false,
  gallery,
  reverse,
  entryIndex,
  setEntryIndex,
  state,
}: Props) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="relative xl:w-[600px] w-full">
          <div
            className={clsx(
              "accent-outline w-full flex h-fit",
              reverse && "reverse-x",
              "rounded-md min-h-96",
            )}
          >
            <Slideshow
              entryIndex={entryIndex}
              setEntryIndex={setEntryIndex}
              gallery={gallery}
              showSkeleton={showSkeleton}
              state={state}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default FeaturedProjectBanner

import React from "react"
import { GalleryEntryType } from "src/components/props/PictureData"
import { SlideshowProps } from "src/components/props/SlideshowProps"
import ImagePicture from "src/components/ui/ImagePicture"
import Slideshow from "src/components/ui/slideshow/Slideshow"
import { GalleryViewState } from "src/components/hooks/useGallery"

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
  state
}: Props) => {
  return (
    <>
      <div className="w-full xl:flex hidden justify-center items-center">
        <div className={`relative project-banner`}>
          <div
            className={`accent-outline ${
              reverse && "reverse-x"
            } rounded-md min-h-96`}
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

      {/* MOBILE / TABLET VERSION */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full xl:hidden block pointer-events-none">
        {
          <div className="tint h-full opacity-5 blur-sm">
            {gallery &&
              GalleryEntryType.isImage(gallery.entries[entryIndex]) && (
                <ImagePicture
                  path={gallery?.path}
                  extensions={gallery?.extensions}
                  file={gallery?.entries[entryIndex]}
                />
              )}
          </div>
        }
      </div>
    </>
  )
}
export default FeaturedProjectBanner

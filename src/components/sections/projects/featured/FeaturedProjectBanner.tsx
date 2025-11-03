import React, { useMemo } from "react"
import {
  FindFirstGalleryImageIndex,
  GalleryEntryType
} from "src/components/props/PictureData"
import { SlideshowProps } from "src/components/props/SlideshowProps"
import ImagePicture from "src/components/ui/ImagePicture"
import Slideshow from "src/components/ui/slideshow/Slideshow"

interface Props extends SlideshowProps {
  reverse: boolean
  entryIndex: number,
  setEntryIndex: React.Dispatch<React.SetStateAction<number>>
}
const FeaturedProjectBanner = ({
  showSkeleton = false,
  gallery,
  reverse,
  entryIndex,
  setEntryIndex
}: Props) => {
  const firstImage = useMemo(() => {
    const index = FindFirstGalleryImageIndex(gallery)

    if (index === -1 || !gallery) {
      return null
    }
    return gallery.entries[index]
  }, [gallery])
  return (
    <>
      <div className="w-full xl:flex hidden justify-center items-center">
        <div className={`relative project-banner`}>
          <div
            className={`accent-outline ${
              reverse && "reverse-x"
            } rounded-md min-h-96`}
          >
            <Slideshow entryIndex={entryIndex} setEntryIndex={setEntryIndex} gallery={gallery} showSkeleton={showSkeleton} />
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET VERSION */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full xl:hidden block pointer-events-none">
        {showSkeleton || !gallery || !firstImage || !GalleryEntryType.isImage(firstImage) ? (
          <div className="dark:bg-gray-950 bg-[#e2e5e9] w-full h-full"></div>
        ) : (
          <div className="tint h-full">
            <ImagePicture
              path={gallery.path}
              extensions={gallery.extensions}
              file={firstImage}
              alt="bar"
              className="object-fill scale-110 grayscale opacity-5 brightness-50"
            />
          </div>
        )}
      </div>
    </>
  )
}
export default FeaturedProjectBanner

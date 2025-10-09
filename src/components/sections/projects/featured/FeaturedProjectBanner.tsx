import React from "react"
import { SlideshowProps } from "src/components/props/SlideshowProps"
import ImagePicture from "src/components/ui/Picture"
import Slideshow from "src/components/ui/slideshow/Slideshow"

const FeaturedProjectBanner = ({
  showSkeleton = false,
  images,
}: SlideshowProps) => {
  return (
    <>
      <div className="w-1/2 xl:flex hidden justify-center items-center">
        <div className={`relative project-banner`}>
          <div className="accent-outline rounded-md min-h-96">
            <Slideshow images={images} showSkeleton={showSkeleton} />
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET VERSION */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full xl:hidden block pointer-events-none">
        {showSkeleton || !images ? (
          <div className="bg-gray-950 w-full h-full"></div>
        ) : (
          <div className="tint">
            <ImagePicture
              path={images.path}
              extensions={images.extensions}
              file={images.files[0]}
              alt="bar"
              className="object-cover scale-110 grayscale opacity-5 brightness-50"
            />
          </div>
        )}
      </div>
    </>
  )
}
export default FeaturedProjectBanner

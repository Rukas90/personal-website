import React from "react"

interface Props {
  showSkeleton?: boolean
  bannerBg: string
}

const Banner = ({ showSkeleton = false, bannerBg }: Props) => {
  return (
    <>
      <div className="w-1/2 xl:flex hidden justify-center items-center">
        <div className={`relative project-banner`}>
          <div className="accent-outline rounded-md min-h-96">
            <div className="parallax shimmer scale-in shadow-2xl">
              <img src={bannerBg} className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 w-full h-full xl:hidden block pointer-events-none">
        {showSkeleton ? (
          <div className="bg-gray-950 w-full h-full"></div>
        ) : (
          <div className="tint">
            <img
              className="object-cover scale-110 grayscale opacity-5 brightness-50"
              src={bannerBg}
            />
          </div>
        )}
      </div>
    </>
  )
}
export default Banner

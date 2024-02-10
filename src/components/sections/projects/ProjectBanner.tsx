import React, { useEffect, useState } from "react"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"
import { Lerp } from "src/utils/Math"

interface Props {
  showSkeleton?: boolean
  frontSrc: string
  backSrc: string
  showFront: boolean
  flipForward?: boolean
}

const ProjectBanner = ({
  showSkeleton = false,
  frontSrc,
  backSrc,
  showFront,
  flipForward,
}: Props) => {
  const [rotation, setRotation] = useState<number>(15)

  const onMouseMove = (e: MouseEvent) => {
    const mx = e.clientX

    setRotation(Lerp(-10, 10, mx / document.body.clientWidth))
  }
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  const bannerStyle = {
    transform: `perspective(1200px) rotateY(${rotation}deg)`,
  }
  return (
    <div
      className={`relative project-banner ${
        showSkeleton && "shimmer"
      } overflow-hidden`}
      style={bannerStyle}
    >
      <div className="project-banner-flipper w-full h-full">
        <div className="front">
          <img src={frontSrc} alt="Front" />
        </div>
        <div className="back">
          <img src={backSrc} alt="Back" />
        </div>
      </div>
    </div>
  )
}
export default ProjectBanner

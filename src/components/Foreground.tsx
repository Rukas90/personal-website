import React from "react"
import SocialBanner from "./ui/SocialBanner"
import BackToTop from "./ui/BackToTop"
import { useForeground } from "./contexts/ForegroundContext"

const Foreground = () => {
  const { content } = useForeground()

  return (
    <div className="flex foreground-container fixed justify-center pointer-events-none w-full h-full top-0 left-0">
      <div className="w-full relative">
        <div className="hidden 3xl:flex">
          <BackToTop />
          <SocialBanner />
        </div>
        {content && (
          <div className="fixed top-0 left-0 w-full h-full z-50">{content}</div>
        )}
      </div>
    </div>
  )
}
export default Foreground

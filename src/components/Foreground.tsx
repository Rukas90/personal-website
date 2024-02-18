import React from "react"
import SocialBanner from "./ui/SocialBanner"
import BackToTop from "./ui/BackToTop"

const Foreground = () => {
  return (
    <div className="hidden 3xl:flex foreground-container fixed justify-center pointer-events-none w-full h-full top-0 left-0">
      <div className="w-full relative">
        <BackToTop />
        <SocialBanner />
      </div>
    </div>
  )
}
export default Foreground

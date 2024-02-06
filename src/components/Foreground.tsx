import React from "react"
import SocialBanner from "./SocialBanner"
import BackToTop from "./BackToTop"

const Foreground = () => {
  return (
    <div className="foreground-container fixed justify-center pointer-events-none w-full h-full top-0 left-0 flex">
      <div className="content-container relative">
        <BackToTop />
        <SocialBanner />
      </div>
    </div>
  )
}
export default Foreground

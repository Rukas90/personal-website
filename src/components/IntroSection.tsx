import React from "react"
import IntroductionText from "./IntroductionText"
import AnimatedBackground from "./AnimatedBackground"

const IntroSection = () => {
  return (
    <div className="w-full h-dvh text-white flex items-center px-48 pt-[110px]">
      <AnimatedBackground />
      <IntroductionText />
    </div>
  )
}
export default IntroSection

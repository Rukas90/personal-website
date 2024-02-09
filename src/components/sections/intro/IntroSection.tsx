import React from "react"
import IntroductionText from "./IntroductionText"
import AnimatedBackground from "./AnimatedBackground"
import { useMediaQuery } from "react-responsive"

const IntroSection = () => {
  const lg = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <div className="w-full min-h-dvh text-white flex items-center justify-center sm:justify-start px-8 sm:px-24 md:px-48 pt-[110px]">
      {lg && <AnimatedBackground />}
      <IntroductionText />
    </div>
  )
}
export default IntroSection

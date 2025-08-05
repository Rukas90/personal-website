import React from "react"
import ScrollDownIndicator from "src/components/ui/ScrollDownIndicator"
import { SCROLL_DOWN_THRESHOLD } from "src/utils/Constants"
import useScrollPassedThreshold from "src/components/hooks/useScrollPassedThreshold"
import BorderContainer from "../BorderContainer"
import IntroductionText from "./IntroductionText"
import Background from "./canvas/Background"

const IntroSection = () => {
  const isVisible = !useScrollPassedThreshold(SCROLL_DOWN_THRESHOLD)
  const isMobile = window.innerWidth < 768

  return (
    <div className="relative w-full min-h-dvh text-start flex flex-col justify-center items-center sm:items-start px-8 sm:px-24 md:px-48 pt-[110px]">
      <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center overflow-hidden">
        <div id="home" className="absolute top-0 left-0 w-full h-48" />
        <div className="h-full aspect-square">
          {isMobile ? <></> : <Background />}
        </div>
      </div>
      <BorderContainer className="my-auto">
        <IntroductionText />
      </BorderContainer>
      <div
        className={`relative w-full min-h-8 h-8 mb-6 pointer-events-none fade-${
          isVisible ? "up" : "out"
        }`}
      >
        <ScrollDownIndicator className="fade-up mx-auto" />
      </div>
    </div>
  )
}
export default IntroSection

import React from "react"
import ScrollDownIndicator from "src/components/ui/ScrollDownIndicator"
import { SCROLL_DOWN_THRESHOLD } from "src/utils/Constants"
import useScrollPassedThreshold from "src/components/hooks/useScrollPassedThreshold"
import BorderContainer from "../BorderContainer"
import IntroductionText from "./IntroductionText"
import BackgroundElement from "./BackgroundElement"
import { PortfolioIntroData } from "src/config/PortfolioConfig"

const IntroSection = (props: PortfolioIntroData) => {
  const isVisible = !useScrollPassedThreshold(SCROLL_DOWN_THRESHOLD)

  return (
    <div className="relative w-full h-svh min-h-min text-start flex flex-col justify-center items-center sm:items-start px-8 sm:px-24 md:px-28 lg:px-64 pt-[110px]">
      <BackgroundElement />
      <BorderContainer
        className="m-auto"
        applyMargin={false}
        applyPadding={false}
      >
        <IntroductionText {...props} />
      </BorderContainer>
      <div
        className={`relative w-full min-h-8 h-8 my-6 pointer-events-none fade-${
          isVisible ? "up" : "out"
        }`}
      >
        <ScrollDownIndicator className="fade-up mx-auto" />
      </div>
    </div>
  )
}
export default IntroSection

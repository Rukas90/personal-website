import React from "react"
import IntroSection from "./IntroSection"
import AboutSection from "./AboutSection"
import SkillsSection from "./SkillsSection"

const Content = () => {
  return (
    <div className="min-h-dvh w-full flex justify-center">
      <div className="content-container flex flex-col tracking-wide">
        <IntroSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </div>
  )
}
export default Content

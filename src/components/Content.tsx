import React from "react"
import IntroSection from "./Sections/intro/IntroSection"
import AboutSection from "./Sections/about/AboutSection"
import SkillsSection from "./Sections/skills/SkillsSection"
import ProjectsSection from "./Sections/projects/ProjectsSection"
import ContactSection from "./sections/contact/ContactSection"

const Content = () => {
  return (
    <div className="min-h-dvh w-full flex justify-center">
      <div className="content-container flex flex-col tracking-wide">
        <IntroSection />
        <div className="relative 2xl:px-64 md:px-32 sm:px-24 tn:px-16 px-6 text-gray-100 text-center flex flex-col items-center">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
export default Content

import React from "react"
import Header from "../Header"
import Content from "../Content"
import AboutSection from "src/components/Sections/about/AboutSection"
import IntroSection from "src/components/Sections/intro/IntroSection"
import ProjectsSection from "src/components/Sections/projects/ProjectsSection"
import SkillsSection from "src/components/Sections/skills/SkillsSection"
import ContactSection from "src/components/sections/contact/ContactSection"

const HomeView = () => {
  return (
    <>
      <Header />
      <Content>
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Content>
    </>
  )
}
export default HomeView

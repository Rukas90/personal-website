import React from "react"
import Header from "../Header"
import Content from "../Content"
import AboutSection from "src/components/Sections/about/AboutSection"
import IntroSection from "src/components/Sections/intro/IntroSection"
import ProjectsSection from "src/components/sections/projects/ProjectsSection"
import SkillsSection from "src/components/Sections/skills/SkillsSection"
import ContactSection from "src/components/sections/contact/ContactSection"
import { SectionsProvider } from "../contexts/SectionsContext"
import SectionWrapper from "../sections/SectionWrapper"
import FooterSection from "../sections/footer/FooterSection"

const HomeView = () => {
  return (
    <SectionsProvider>
      <Header />
      <Content>
        <SectionWrapper name="Home">
          <IntroSection />
        </SectionWrapper>
        <SectionWrapper name="About">
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper name="Skills">
          <SkillsSection />
        </SectionWrapper>
        <SectionWrapper name="Projects">
          <ProjectsSection />
        </SectionWrapper>
        <SectionWrapper name="Contact">
          <ContactSection />
        </SectionWrapper>
        <FooterSection />
      </Content>
    </SectionsProvider>
  )
}
export default HomeView

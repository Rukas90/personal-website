import React from "react"
import Content from "../Content"
import { SectionsProvider } from "../contexts/SectionsContext"
import Header from "../Header"
import { portfolioConfigs } from "src/config/PortfolioConfig"
import PortfolioCard from "../ui/PortfolioCard"
import ContactSection from "../sections/contact/ContactSection"
import FooterSection from "../sections/footer/FooterSection"
import SectionWrapper from "../sections/SectionWrapper"
import LoadingScreen from "../ui/LoadingScreen"

const HomeView = () => {
  return (
    <SectionsProvider>
      <LoadingScreen />
      <Header navItems={["home", "contact"]} />
      <Content>
        <SectionWrapper name="Home">
          <div className="flex flex-col items-center justify-center h-svh px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-600 mb-10">
              Explore my work across different tech stacks
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {Object.entries(portfolioConfigs).map(([key, config]) => (
                <PortfolioCard
                  key={key}
                  subdomain={key}
                  role={config.intro.role}
                  subtitle={config.intro.subtitle}
                />
              ))}
            </div>
          </div>
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

import React, { useState } from "react"
import Content from "../Content"
import { SectionsProvider } from "../contexts/SectionsContext"
import Header from "../Header"
import { portfolioConfigs } from "src/config/PortfolioConfig"
import PortfolioCard from "../ui/PortfolioCard"
import ContactSection from "../sections/contact/ContactSection"
import FooterSection from "../sections/footer/FooterSection"
import SectionWrapper from "../sections/SectionWrapper"
import LoadingScreen from "../ui/LoadingScreen"
import TypingText from "../ui/TypingText"
import ArrowUpIcon from "../ui/images/misc/ArrowUpIcon"

const HomeView = () => {
  const [arrowShow, setArrowShow] = useState(false)
  const [portfoliosShow, setPortfoliosShow] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(-1)

  const ARROW_APPEAR_DELAY = 500
  const PORTFOLIOS_APPEAR_DELAY = 700

  const beginReveal = () => {
    setArrowShow(true)
    setTimeout(() => setPortfoliosShow(true), PORTFOLIOS_APPEAR_DELAY)
  }

  return (
    <SectionsProvider>
      <LoadingScreen />
      <Header navItems={["home", "contact"]} />
      <Content>
        <SectionWrapper name="Home">
          <div className="flex flex-col items-center justify-center min-h-svh mt-[100px] px-4 py-8">
            <TypingText
              className="justify-center items-center"
              onFinished={() => setTimeout(beginReveal, ARROW_APPEAR_DELAY)}
              sentences={[
                {
                  pause: 1,
                  text: "Hi, ",
                  className: "text-xl fira-code mb-6 text-center dark:text-teal-400 text-red-500",
                  inline: true
                },
                {
                  pause: 0.6,
                  text: "My name is Rukas Skirkevicius",
                  className: "text-xl fira-code mb-6 text-center dark:text-teal-400 text-red-500",
                  inline: true
                },
                {
                  pause: 0.7,
                  text: "Welcome to My Portfolio",
                  className: "xl:text-5xl text-3xl font-bold mb-6 text-center mt-6",
                },
                {
                  pause: 0.5,
                  text: "Explore my work across different tech stacks",
                  className: "xl:text-xl text-gray-600 mb-4 text-center",
                },
              ]}
            />
            <div
              className={`w-14 my-14 ${
                arrowShow ? "fade-down visible" : "invisible"
              }`}
            >
              <ArrowUpIcon className="rotate-180" />
            </div>
            <div
              className={`relative flex flex-wrap justify-center items-center w-full gap-8 ${
                portfoliosShow ? "fade-in visible" : "invisible"
              }`}
            >
              {Object.entries(portfolioConfigs).map(([key, config], index) => (
                <div
                  onMouseOver={() => setHoverIndex(index)}
                  onMouseOut={() => setHoverIndex(-1)}
                  className={`relative rounded-2xl p-4 w-[500px] transition-color overflow-hidden border-4 hover:dark:border-teal-400 border-transparent hover:border-black`}
                >
                  <div className="relative">
                    <PortfolioCard
                      key={key}
                      resume={config.resumeUrl}
                      subdomain={key}
                      role={config.intro.role}
                      subtitle={config.intro.subtitle}
                    />
                    <div
                      className={`pointer-events-none absolute w-full h-full top-0 left-0 dark:bg-teal-200 bg-red-50 mix-blend-multiply transition-opacity ${
                        hoverIndex !== -1 && hoverIndex !== index
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
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

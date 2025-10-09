import React, { ReactNode } from "react"
import Profile from "img/profile.jpg"
import SectionContainer from "../SectionContainer"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"

const AboutSection = ({ content }: { content: ReactNode }) => {
  return (
    <SectionContainer aria-label="About" label="About">
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 2xl:gap-24">
        <div className="relative xl:w-48 w-60 xl:h-48 h-60 shrink-0 accent-outline rounded-lg">
          <img
            className="interactable absolute grayscale hover:grayscale-0 m-0 hover:-mx-2 hover:-my-2 transition-all ease-in-out duration-200 object-cover rounded-lg"
            src={Profile}
          />
        </div>
        <ParagraphBlock className="flex flex-col gap-8 sm:text-center lg:text-justify">
          {content}
        </ParagraphBlock>
      </div>
    </SectionContainer>
  )
}
export default AboutSection

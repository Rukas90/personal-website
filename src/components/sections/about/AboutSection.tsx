import React from "react"
import Profile from "img/profile.jpg"
import SectionContainer from "../SectionContainer"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"

const AboutSection = () => {
  return (
    <SectionContainer label="About">
      <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 2xl:gap-24">
        <div className="relative xl:w-48 w-60 shrink-0">
          <img className="object-cover rounded-lg" src={Profile} />
        </div>
        <ParagraphBlock className="flex flex-col gap-8 sm:text-center lg:text-justify">
          <span>
            Hello there! I'm Rukas Skirkevicius, a Full Stack developer with a
            fervent passion for crafting intuitive and dynamic websites. My
            approach is detail-oriented and I thrive on tackling complex
            projects, constantly embracing new technologies and frameworks to
            broaden my expertise.
          </span>
          <span>
            My professional journey has led me to work on a variety of projects,
            ranging from Android and AR applications to Unity tools, games, and
            3D modeling. However, my professional focus remains steadfast on
            website development.
          </span>
          <span>
            Outside the digital world, I immerse myself in the great outdoors
            with hiking, delve into the world of video games, and dedicate time
            to learning guitar. These hobbies not only bring me joy but also
            inspire my professional creativity and problem-solving skills.
          </span>
        </ParagraphBlock>
      </div>
    </SectionContainer>
  )
}
export default AboutSection

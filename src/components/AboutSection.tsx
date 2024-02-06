import React, { useEffect, useRef, useState } from "react"
import SectionLabel from "./SectionLabel"
import Profile from "img/profile.jpg"

const AboutSection = () => {
  return (
    <div className="relative px-64 pt-32 pb-16 text-gray-100 text-center flex flex-col items-center">
      <SectionLabel text="About" />
      <div className="relative flex flex-col xl:flex-row items-center gap-24">
        <div className="relative profile-img shrink-0">
          <img className="object-cover rounded-full" src={Profile} />
        </div>
        <p className="flex flex-col gap-8 text-center xl:text-justify tracking-wider font-light">
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
        </p>
      </div>
    </div>
  )
}
export default AboutSection

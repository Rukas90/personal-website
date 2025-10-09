import React, { useRef, useState } from "react"
import SectionContainer from "../SectionContainer"
import BorderContainer from "../BorderContainer"
import Button from "src/components/ui/buttons/Button"
import { paddedNumber } from "src/utils/FormattingUtils"
import { SkillData } from "src/config/PortfolioConfig"

const SkillsSection = ({ skills }: { skills: SkillData[] }) => {
  const maxDefaultShowCount = 6

  const [hoverIndex, setHoverIndex] = useState<number>(-1)
  const [showAll, setShowAll] = useState<boolean>(false)
  const topScrollRef = useRef<HTMLDivElement>(null)

  return (
    <SectionContainer
      aria-label="Skills & Experience"
      label="Skills & Experience"
      borders={false}
    >
      <BorderContainer>
        <div
          ref={topScrollRef}
          className="flex flex-col items-center mx-auto px-4"
        >
          <div className="grid gap-6 w-full max-w-3xl">
            {skills.map(({ label, skills }, index) => {
              if (!showAll && index >= maxDefaultShowCount) {
                return
              }
              return (
                <div
                  key={label}
                  onMouseOver={() => setHoverIndex(index)}
                  onMouseOut={() => setHoverIndex(-1)}
                  className="border-b last-of-type:border-b-0 rounded-2xl dark:border-gray-900 p-4 hover:shadow-lg shadow-md transition-shadow shadow-[#00000013] dark:bg-transparent bg-[#ebedef] interactable"
                >
                  <h3
                    className={`text-lg font-base mb-2 text-center sm:text-left transition-colors pointer-events-none ${
                      hoverIndex !== -1 && hoverIndex !== index
                        ? "dark:text-gray-300 text-black"
                        : "dark:text-gray-200 text-black"
                    }`}
                  >
                    <span className="dark:text-teal-400 text-red-600 fira-code">
                      {paddedNumber(index + 1)}.
                    </span>{" "}
                    {label}
                  </h3>
                  <p className="dark:text-teal-600 text-2xl pointer-events-none leading-none text-black text-center sm:text-left tracking-widest -mt-3 mb-3">
                    ..
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start pointer-events-none">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-sm rounded-full border-2 dark:border-teal-600 border-red-500 dark:text-teal-400 text-red-600 transition-opacity ${
                          hoverIndex !== -1 && hoverIndex !== index
                            ? "opacity-90"
                            : "opacity-100"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <Button
            className="mt-8"
            label={`Show ${showAll ? "Less" : "All"}`}
            onClick={() => {
              const newState = !showAll
              setShowAll(newState)

              if (newState === false) {
                topScrollRef.current?.scrollIntoView()
              }
            }}
          />
        </div>
      </BorderContainer>
    </SectionContainer>
  )
}
export default SkillsSection

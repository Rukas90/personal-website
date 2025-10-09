import React, { useState } from "react"
import TypingText from "../../ui/TypingText"
import Button from "src/components/ui/buttons/Button"
import { PortfolioIntroData } from "src/config/PortfolioConfig"

const IntroductionText = ({ role, subtitle }: PortfolioIntroData) => {
  const [showBtn, setShowBtn] = useState(false)
  const BTN_APPEAR_DELAY = 600

  return (
    <div className="max-w-full flex flex-col">
      <TypingText
        className="tracking-wider space-y-5 leading-relaxed"
        sharedSentenceClasses="pointer-events-none"
        sentences={[
          {
            text: "> Hi",
            className:
              "text-xl dark:text-teal-400 text-red-600 fira-code tracking-wide",
            typeSpeed: 0.03,
            pause: 0.4,
            inline: true,
          },
          {
            text: ", I am",
            useLastSentenceClasses: true,
            typeSpeed: 0.03,
            pause: 0.8,
            inline: true,
          },
          {
            text: "Rukas Skirkevicius.",
            className: "clamp-text ct-name font-medium leading-tight",
            typeSpeed: 0.035,
            pause: 0.4,
          },
          {
            text: role,
            className:
              "clamp-text ct-role lg:text-6xl mn:text-3xl text-3xl dark:text-teal-500 text-gray-600 font-light",
            style: { marginTop: "10px" },
            typeSpeed: 0.035,
            pause: 0.4,
          },
          {
            text: subtitle,
            className: "clamp-text ct-text dark:text-gray-400 text-gray-600 ",
            typeSpeed: 0.035,
            pause: 0.4,
          },
        ]}
        onFinished={() => setTimeout(() => setShowBtn(true), BTN_APPEAR_DELAY)}
      />
      <div className="flex flex-col items-center sm:w-fit">
        <Button
          label="View Projects"
          className={`w-auto mt-16 ${
            showBtn ? "fade-in visible" : "invisible"
          }`}
          href="#projects"
        />
      </div>
    </div>
  )
}
export default IntroductionText

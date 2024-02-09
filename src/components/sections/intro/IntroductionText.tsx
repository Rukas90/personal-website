import React, { useState } from "react"
import TypingText from "../../ui/TypingText"
import Button from "src/components/ui/buttons/Button"

const IntroductionText = () => {
  const [showBtn, setShowBtn] = useState(false)

  const BTN_APPEAR_DELAY = 600

  return (
    <div className="max-w-full flex flex-col">
      <TypingText
        className="space-y-6 interactable"
        sharedSentenceClasses="pointer-events-none"
        sentences={[
          {
            text: "> Hi",
            className: "text-lg text-teal-400",
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
            className: "sm:text-7xl mn:text-4xl text-3xl",
            typeSpeed: 0.035,
            pause: 0.4,
          },
          {
            text: "Web Developer",
            className:
              "sm:text-5xl mn:text-2xl text-lg text-gray-400 sm:font-extralight font-light",
            typeSpeed: 0.035,
            pause: 0.4,
          },
        ]}
        onFinished={() => setTimeout(() => setShowBtn(true), BTN_APPEAR_DELAY)}
      />
      <div className="flex flex-col items-center sm:w-fit">
        <div className="w-[1px] h-16 bg-gray-800 mt-10" />
        <Button
          label="View Projects"
          className={`sm:w-auto w-full mt-10 ${
            showBtn ? "fade-in visible" : "invisible"
          }`}
        />
      </div>
    </div>
  )
}
export default IntroductionText

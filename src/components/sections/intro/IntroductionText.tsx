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
            className: "text-lg dark:text-teal-400 text-black",
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
            className: "lg:text-7xl mn:text-4xl text-3xl",
            typeSpeed: 0.035,
            pause: 0.4,
          },
          {
            text: "A Full-Stack Developer",
            className:
              "lg:text-5xl mn:text-2xl text-xl dark:text-gray-400 text-gray-600 sm:font-extralight font-light",
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
        />
      </div>
    </div>
  )
}
export default IntroductionText

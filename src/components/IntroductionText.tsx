import React, { useState } from "react"
import TypingText from "./TypingText"

const IntroductionText = () => {
  const [showBtn, setShowBtn] = useState(false)

  const BTN_APPEAR_DELAY = 600

  return (
    <div>
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
            className: "text-7xl",
            typeSpeed: 0.035,
            pause: 0.4,
          },
          {
            text: "Web Developer",
            className: "text-5xl text-gray-400 font-extralight",
            typeSpeed: 0.035,
            pause: 0.4,
          },
        ]}
        onFinished={() => setTimeout(() => setShowBtn(true), BTN_APPEAR_DELAY)}
      />
      <div className="flex flex-col items-center w-fit">
        <div className="w-[1px] h-16 bg-gray-800 mt-10" />
        <button
          className={`interactable transition-all hover:shadow-xl shadow-teal-400 border-2 hover:-translate-y-1 border-teal-500 hover:border-black rounded-md px-6 py-3 mt-10 hover:bg-black hover:text-white text-teal-400 ${
            showBtn ? "fade-in visible" : "invisible"
          }`}
        >
          View Projects
        </button>
      </div>
    </div>
  )
}
export default IntroductionText

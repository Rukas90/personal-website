import React, { useEffect } from "react"
import { Sentence } from "src/types/Sentence"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends GeneralProps {
  sentences: Sentence[]
  typeSpeed?: number
  sharedSentenceClasses?: string
  onFinished?: () => void
}

const TypingText = ({
  sentences,
  typeSpeed = 0.02,
  className,
  sharedSentenceClasses,
  onFinished,
}: Props) => {
  let cumulativeDelay = 0
  let totalTypingTime = 0

  sentences.forEach((sentence) => {
    totalTypingTime +=
      sentence.text.length * (sentence.typeSpeed ?? typeSpeed) +
      (sentence.pause ?? 0)
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinished) onFinished()
    }, totalTypingTime * 1000)

    return () => clearTimeout(timer)
  }, [onFinished, totalTypingTime])

  return (
    <div className={`typing-text ${className}`}>
      {sentences.map((sentence, sIndex) => {
        const sentenceTypeSpeed = sentence.typeSpeed ?? typeSpeed
        const pauseAfterSentence = sentence.pause ?? 0

        const sentenceDelay =
          sIndex === 0
            ? 0
            : sentences[sIndex - 1].text.length *
                (sentences[sIndex - 1].typeSpeed ?? typeSpeed) +
              (sentences[sIndex - 1].pause ?? 0)

        cumulativeDelay += sentenceDelay

        const SentenceTag = sentence.inline ? "span" : "div"
        const sentenceClasses =
          sentence.useLastSentenceClasses && sIndex > 0
            ? sentences[sIndex - 1].className
            : sentence.className

        return (
          <SentenceTag
            key={`sentence_${sIndex}`}
            className={`${sentenceClasses} ${sharedSentenceClasses} break-words`}
          >
            {sentence.text.split("").map((char, index) => (
              <span
                key={index}
                className="instant-fade-in"
                style={{
                  animationDelay: `${
                    cumulativeDelay +
                    index * sentenceTypeSpeed +
                    pauseAfterSentence
                  }s`,
                }}
              >
                {char}
              </span>
            ))}
          </SentenceTag>
        )
      })}
    </div>
  )
}
export default TypingText

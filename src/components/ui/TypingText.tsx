import React, { useEffect, useMemo } from "react"
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
  const delays = useMemo(() => {
    let cumulative = 0
    return sentences.map((sentence, index) => {
      const speed = sentence.typeSpeed ?? typeSpeed
      const pause = sentence.pause ?? 0
      const delay =
        index === 0
          ? 0
          : sentences[index - 1].text.length *
              (sentences[index - 1].typeSpeed ?? typeSpeed) +
            (sentences[index - 1].pause ?? 0)
      cumulative += delay
      return {
        sentence,
        delay: cumulative,
        speed,
        pause,
      }
    })
  }, [sentences, typeSpeed])

  const totalTypingTime = useMemo(() => {
    return sentences.reduce(
      (acc, s) =>
        acc + s.text.length * (s.typeSpeed ?? typeSpeed) + (s.pause ?? 0),
      0
    )
  }, [sentences, typeSpeed])

  useEffect(() => {
    let frame: number
    const start = performance.now()

    const check = (now: number) => {
      if (now - start >= totalTypingTime * 1000) {
        onFinished?.()
      } else {
        frame = requestAnimationFrame(check)
      }
    }

    frame = requestAnimationFrame(check)
    return () => cancelAnimationFrame(frame)
  }, [onFinished, totalTypingTime])

  return (
    <div className={`typing-text ${className}`}>
      {delays.map(({ sentence, delay, speed, pause }, sIndex) => {
        const SentenceTag = sentence.inline ? "span" : "div"
        const sentenceClasses =
          sentence.useLastSentenceClasses && sIndex > 0
            ? sentences[sIndex - 1].className
            : sentence.className

        return (
          <SentenceTag
            key={`sentence_${sIndex}`}
            className={`${sentenceClasses} ${sharedSentenceClasses} break-words`}
            style={sentence.style}
          >
            {sentence.text.split("").map((char, index) => (
              <span
                key={index}
                className="instant-fade-in"
                style={{
                  animationDelay: `${delay + index * speed + pause}s`,
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

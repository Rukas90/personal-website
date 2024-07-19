import React, { useEffect, useRef, useState } from "react"
import useStyling from "src/components/contexts/Styling"
import { useTheme } from "src/components/contexts/ThemeContext"
import PlayIcon from "../images/misc/PlayIcon"
import StopIcon from "../images/misc/StopIcon"

interface Props {
  enabled: boolean
  onToggleEnabled: () => void
  startTime: number | null
  delay: number
}

const SlideshowAutoButton = ({
  enabled,
  onToggleEnabled: onEnabledChanged,
  startTime,
  delay,
}: Props) => {
  const { isDark } = useTheme()
  const { accentColor } = useStyling()
  const [percentage, setPercentage] = useState<number>(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    stopInterval()

    if (!enabled || !startTime) {
      setPercentage(0)
      return
    }
    timeout.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progressPercentage = Math.min(elapsedTime / delay, 1) * 100
      setPercentage(progressPercentage)
    }, 100)

    return () => {
      stopInterval()
    }
  }, [enabled, startTime, delay])

  const stopInterval = () => {
    if (!timeout.current) {
      return
    }
    clearInterval(timeout.current)
  }

  // Progress styling ...

  const progressBackground = isDark ? "#042f2e" : "#FFFFFF"
  const progressFill = accentColor.hex
  const progressGradientStyle: React.CSSProperties = {
    background: `radial-gradient(closest-side, ${progressBackground} 80%, transparent 100% 100%), conic-gradient(${progressFill} ${percentage}%, ${progressBackground} 0)`,
  }

  return (
    <button
      onClick={onEnabledChanged}
      style={progressGradientStyle}
      className="interactable absolute right-4 top-4 w-6 z-10 pointer-events-auto rounded-full drop-shadow-xl"
    >
      {enabled ? <StopIcon /> : <PlayIcon />}
    </button>
  )
}
export default SlideshowAutoButton

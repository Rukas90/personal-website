import React, { useEffect, useRef, useState } from "react"
import useStyling from "src/components/contexts/Styling"
import { useTheme } from "src/components/contexts/ThemeContext"
import PlayIcon from "../images/misc/PlayIcon"
import StopIcon from "../images/misc/StopIcon"
import { GeneralProps } from "src/components/props/GeneralProps"

interface Props extends GeneralProps {
  enabled: boolean
  onToggleEnabled: () => void
  startTime: number | null
  delay: number
}

const GalleryAutoButton = ({
  enabled,
  onToggleEnabled,
  startTime,
  delay,
  className,
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

  const progressBackground = isDark ? "#042f2e" : "#FFFFFF"
  const progressFill = accentColor.hex
  const progressGradientStyle: React.CSSProperties = {
    background: `radial-gradient(closest-side, ${progressBackground} 80%, transparent 100% 100%), conic-gradient(${progressFill} ${percentage}%, ${progressBackground} 0)`,
  }

  return (
    <button
      onClick={onToggleEnabled}
      style={progressGradientStyle}
      className={`interactable ${className} w-6 h-6 z-10 pointer-events-auto rounded-full drop-shadow-xl`}
    >
      {enabled ? <StopIcon /> : <PlayIcon />}
    </button>
  )
}
export default GalleryAutoButton

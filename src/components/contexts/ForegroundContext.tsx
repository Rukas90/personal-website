import React, { createContext, useContext, useState, ReactNode } from "react"
import { ChildrenProps } from "props/ChildrenProps"

type ForegroundContextType = {
  content: ReactNode
  setOverlayContent: (content: ReactNode) => void
}

const ForegroundContext = createContext<ForegroundContextType | undefined>(
  undefined
)

export const ForegroundProvider = ({ children }: ChildrenProps) => {
  const [content, setContent] = useState<ReactNode | null>(null)

  const setOverlayContent = (content: ReactNode) => {
    setContent(content)
  }
  return (
    <ForegroundContext.Provider value={{ content, setOverlayContent }}>
      {children}
    </ForegroundContext.Provider>
  )
}

export const useForeground = (): ForegroundContextType => {
  const context = useContext(ForegroundContext)

  if (context === undefined) {
    throw new Error("useForeground must be used within a ForegroundProvider")
  }
  return context
}

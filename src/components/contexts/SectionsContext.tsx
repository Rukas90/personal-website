import React, {
  createContext,
  useContext,
  RefObject,
  useState,
  useCallback,
} from "react"
import { ChildrenProps } from "props/ChildrenProps"

type SectionsContextType = {
  register: (name: string, ref: RefObject<HTMLElement>) => () => void
  sections: Set<Section>
  count: number
}

type Section = {
  name: string
  ref: RefObject<HTMLElement>
}

const SectionsContext = createContext<SectionsContextType | undefined>(
  undefined
)

export const SectionsProvider = ({ children }: ChildrenProps) => {
  const [sections, setSections] = useState<Set<Section>>(new Set())

  const register = useCallback((name: string, ref: RefObject<HTMLElement>) => {
    const section = {
      name: name,
      ref: ref,
    }
    setSections((current) => {
      const newSections = new Set(current)
      newSections.add(section)

      return newSections
    })
    return () => {
      setSections((current) => {
        const newSections = new Set(current)
        newSections.delete(section)

        return newSections
      })
    }
  }, [])
  return (
    <SectionsContext.Provider
      value={{ register, sections, count: sections.size }}
    >
      {children}
    </SectionsContext.Provider>
  )
}

export const useSections = (): SectionsContextType => {
  const context = useContext(SectionsContext)

  if (context === undefined) {
    throw new Error("useSections must be used within a SectionsProvider")
  }
  return context
}

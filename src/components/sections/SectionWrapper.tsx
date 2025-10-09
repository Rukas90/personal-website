import React, { useEffect, useRef } from "react"
import { ChildrenProps } from "../props/ChildrenProps"
import { useSections } from "../contexts/SectionsContext"

interface Props extends ChildrenProps {
  name: string
}

const SectionWrapper = ({ name, children }: Props) => {
  const { register } = useSections()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const unregister = register(name, ref)
    return () => unregister()
  }, [name, register])

  const id = name.toLowerCase()

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  )
}
export default SectionWrapper

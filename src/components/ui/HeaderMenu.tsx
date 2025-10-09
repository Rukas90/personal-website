import React, { useEffect, useState } from "react"
import HeaderNavItem from "./HeaderNavItem"
import useScrollListener from "../hooks/useScrollListener"
import { useSections } from "../contexts/SectionsContext"
import { useLocation } from "react-router-dom"

const HeaderMenu = () => {
  const { subscribe, maxScrollY } = useScrollListener()
  const { sections, count } = useSections()
  const [activeID, setActiveID] = useState("")
  const { hash } = useLocation()

  const THRESHOLD = 100

  const onScroll = (scrollY: number) => {
    let index = -1

    sections.forEach((section) => {
      index += 1

      const sec = section.ref.current

      if (!sec) {
        return
      }
      const id = sec.id

      const top = sec.offsetTop
      const height = sec.offsetHeight

      let active = false

      if (scrollY >= top - THRESHOLD && scrollY < top + height + THRESHOLD) {
        active = true
      }
      if (scrollY >= maxScrollY - THRESHOLD && index === count - 1) {
        active = true
      }
      if (scrollY <= THRESHOLD && index === 0) {
        active = true
      }

      if (!active) {
        return
      }
      setActiveID(id)
    })
  }

  useEffect(() => {
    const unsubscribe = subscribe(onScroll)
    onScroll(0)

    return () => unsubscribe()
  }, [sections])

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.substring(1))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [hash])

  return (
    <>
      <HeaderNavItem id="home" activeId={activeID} />
      <HeaderNavItem id="about" activeId={activeID} />
      <HeaderNavItem id="skills" activeId={activeID} />
      <HeaderNavItem id="projects" activeId={activeID} />
      <HeaderNavItem id="contact" activeId={activeID} />
    </>
  )
}
export default HeaderMenu

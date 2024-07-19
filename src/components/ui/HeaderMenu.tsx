import React, { useEffect, useRef, useState } from "react"
import HeaderNavItem from "./HeaderNavItem"
import useScrollListener from "../hooks/useScrollListener"
import { useSections } from "../contexts/SectionsContext"

type HeaderMenuItem = {
  id: string
  label: string
}

const HeaderMenu = () => {
  const { subscribe, maxScrollY } = useScrollListener()
  const { sections, count } = useSections()
  const [items, setItems] = useState<HeaderMenuItem[]>([])

  const [activeID, setActiveID] = useState("")

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
    setItems((_) => {
      const items = Array<HeaderMenuItem>(sections.size)

      let index = -1

      sections.forEach((section) => {
        index++

        items[index] = {
          id: section.name.toLowerCase(),
          label: section.name,
        }
      })
      return items
    })
  }, [sections, count])

  useEffect(() => {
    const unsubscribe = subscribe(onScroll)

    onScroll(0)

    return () => unsubscribe()
  }, [sections])

  return (
    <>
      {items.map((item, index) => (
        <HeaderNavItem
          key={`item_${index}`}
          id={item.id}
          active={activeID === item.id}
          label={item.label}
        />
      ))}
    </>
  )
}
export default HeaderMenu

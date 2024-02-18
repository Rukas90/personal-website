import React, { useEffect, useRef, useState } from "react"
import LogoImg from "../img/logo_2.png"
import { Clamp01, InverseLerp } from "../utils/Math"
import MenuBtn from "./ui/MenuBtn"
import HeaderNavItem from "./ui/HeaderNavItem"
import { useLockBodyScroll } from "./hooks/useLockBodyScroll"
import useScrollListener from "./hooks/useScrollListener"
import ThemeToggle from "./ui/ThemeToggle"
import { useTheme } from "./contexts/ThemeContext"
import PlainText from "./ui/text/PlainText"

const Header = () => {
  const { isDark } = useTheme()
  const { subscribe } = useScrollListener()
  const [overlayStrength, setOverlayStrength] = useState(0)
  const [visible, setVisible] = useState(true)
  const [isExpanded, setExpanded] = useState(false)
  const lastScollPosition = useRef(0)

  const { lockScroll, unlockScroll } = useLockBodyScroll()

  const toggleMenu = () => {
    setExpanded((current) => {
      const newState = !current

      switch (newState) {
        case true:
          lockScroll()
          break
        case false:
          unlockScroll()
          break
      }
      return newState
    })
  }
  const onScroll = () => {
    const threshold = 150
    const scrollY = window.scrollY || document.documentElement.scrollTop

    setOverlayStrength(Clamp01(InverseLerp(0, threshold, scrollY)))

    const scrollAmountThreshold = 250

    if (
      scrollY > lastScollPosition.current &&
      scrollY > scrollAmountThreshold
    ) {
      setVisible(false)
    } else if (
      scrollY < lastScollPosition.current ||
      scrollY <= scrollAmountThreshold
    ) {
      setVisible(true)
    }
    lastScollPosition.current = scrollY
  }

  useEffect(() => {
    const unsubscribe = subscribe(onScroll)

    return () => unsubscribe()
  }, [])

  const bgRGB = isDark ? "3, 7, 18" : "225, 225, 225"

  const overlayStyle = {
    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${overlayStrength * 0.2}), 
                0 4px 6px -4px rgba(0, 0, 0, ${overlayStrength * 0.1})`,
    backgroundColor: `rgba(${bgRGB}, ${overlayStrength * 0.5})`,
    backdropFilter: `blur(${2 + 2 * overlayStrength}px)`,
  }
  return (
    <div
      style={overlayStyle}
      className={`fixed top-header w-full fade-down flex flex-col justify-center z-20 ${
        !visible && !isExpanded ? "inactive" : ""
      }`}
    >
      <div className="w-full flex items-center justify-center py-6 px-12">
        <div className="content-container flex justify-between items-center">
          <div className="flex z-20 items-center gap-6">
            <div className="interactable relative rounded-full overflow-hidden w-[48px]">
              <img
                className="zoom-rotate-in pointer-events-none dark:invert-0 invert"
                src={LogoImg}
              />
            </div>
            <PlainText className="font-semibold tracking-widest hidden tn:block">
              PORTFOLIO
            </PlainText>
          </div>
          <MenuBtn
            className="z-20 lg:hidden"
            mode={isExpanded ? "close" : null}
            onClick={toggleMenu}
          />
          <ul
            className={`${
              isExpanded ? "flex fade-up" : "lg:flex hidden"
            } lg:text-base sm:text-3xl text-2xl lg:dark:font-normal lg:font-medium font-light lg:bg-transparent lg:dark:bg-transparent dark:bg-gray-950 bg-white lg:relative absolute lg:w-auto w-dvw lg:h-auto h-dvh top-0 left-0 list-none lg:justify-start justify-center items-center lg:flex-row flex-col lg:gap-3 mn:gap-8 gap-4 dark:text-gray-400 lg:pt-0 pt-[55px]`}
          >
            <HeaderNavItem label="Home" active />
            <HeaderNavItem label="About" />
            <HeaderNavItem label="Skills" />
            <HeaderNavItem label="Projects" />
            <HeaderNavItem label="Contact" />

            <li className="relative interactable lg:mt-0 sm:mt-6 mt-3 btn-slide-hover overflow-hidden border-btn-effect px-5 py-2 transition-all rounded-md dark:text-white text-black dark:hover:text-gray-950 hover:text-white dark:border-white border-black border-2">
              <a className="interactable" href="#">
                Resume
              </a>
            </li>
            <li>
              <ThemeToggle className="lg:ml-4 ml-0 lg:mt-0 mt-8" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header

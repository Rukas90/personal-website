import React, { useEffect, useRef, useState } from "react"
import LogoImg from "../img/logo_2.png"
import { Clamp01, InverseLerp } from "../utils/Math"
import HeaderNav from "./ui/HeaderNav"

const Header = () => {
  const [overlayStrength, setOverlayStrength] = useState(0)
  const [visible, setVisible] = useState(true)
  const lastScollPosition = useRef(0)

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
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  const overlayStyle = {
    boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${overlayStrength * 0.2}), 
                0 4px 6px -4px rgba(0, 0, 0, ${overlayStrength * 0.1})`,
    backgroundColor: `rgba(3, 7, 18, ${overlayStrength * 0.5})`,
  }
  return (
    <div
      style={overlayStyle}
      className={`fixed top-header top-0 w-full flex flex-col justify-center backdrop-blur z-20 ${
        !visible && "inactive"
      }`}
    >
      <div className="w-full flex items-center justify-center py-6 px-12">
        <div className="content-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="interactable relative rounded-full overflow-hidden w-[48px]">
              <img
                className="zoom-rotate-in pointer-events-none"
                src={LogoImg}
              />
            </div>
            <p className="text-white font-semibold tracking-widest">
              PORTFOLIO
            </p>
          </div>
          <HeaderNav />
        </div>
      </div>
    </div>
  )
}
export default Header

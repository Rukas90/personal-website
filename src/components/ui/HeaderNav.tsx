import React, { useState } from "react"
import MenuBtn from "./MenuBtn"

const HeaderNav = () => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      <MenuBtn className="z-20 lg:hidden" />
      <ul
        className={`lg:text-base text-3xl lg:font-normal font-light lg:bg-transparent bg-gray-950 lg:relative absolute lg:w-auto w-dvw lg:h-auto h-dvh top-0 left-0 list-none lg:justify-start justify-center items-center flex lg:flex-row flex-col lg:gap-3 gap-12 text-gray-400`}
      >
        <li className="interactable navigation-btn active transition-colors px-5 py-2 hover:text-gray-200">
          Home
        </li>
        <li className="interactable navigation-btn transition-colors px-5 py-2 hover:text-gray-200">
          About
        </li>
        <li className="interactable navigation-btn transition-colors px-5 py-2 hover:text-gray-200">
          Skills
        </li>
        <li className="interactable navigation-btn transition-colors px-5 py-2 hover:text-gray-200">
          Projects
        </li>
        <li className="interactable navigation-btn transition-colors px-5 py-2 hover:text-gray-200">
          Contact
        </li>
        <li className="interactable lg:mt-0 mt-12 btn-slide-hover overflow-hidden border-btn-effect relative px-5 py-2 transition-all rounded-md text-white hover:text-gray-950 border-white border-2">
          <a className="interactable" href="#">
            Resume
          </a>
        </li>
      </ul>
    </>
  )
}
export default HeaderNav

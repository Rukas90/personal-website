import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import PortfolioView from "./components/views/PortfolioView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import { ThemeProvider } from "./components/contexts/ThemeContext"
import { ForegroundProvider } from "./components/contexts/ForegroundContext"
import NotFoundView from "./components/views/NotFoundView"
import { useFixedViewportHeight } from "./components/hooks/useFixedViewportHeight"
import { portfolioConfigs } from "./config/PortfolioConfig"

function App() {
  useFixedViewportHeight()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })

    const onScroll = () => console.log("OnScroll")

    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])

  return (
    <ThemeProvider>
      <ForegroundProvider>
        <Routes>
          <Route
            path="/"
            element={<PortfolioView config={portfolioConfigs["default"]} />}
          />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <Foreground />
      </ForegroundProvider>
      <div className="hidden xl:block">
        <Cursor />
      </div>
    </ThemeProvider>
  )
}

export default App

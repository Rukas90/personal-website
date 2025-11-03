import React, { useEffect } from "react"
import { Routes, Route, useSearchParams, useNavigate, useLocation } from "react-router-dom"
import PortfolioView from "./components/views/PortfolioView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import { ThemeProvider } from "./components/contexts/ThemeContext"
import { ForegroundProvider } from "./components/contexts/ForegroundContext"
import NotFoundView from "./components/views/NotFoundView"
import { useFixedViewportHeight } from "./components/hooks/useFixedViewportHeight"
import { portfolioConfigs } from "./config/PortfolioConfig"
import HomeView from "./components/views/HomeView"

function App() {
  useFixedViewportHeight()
  const [searchParams] = useSearchParams()
  const { pathname } = useLocation()

  const key = searchParams.get("key")
  const portfolio = key ? portfolioConfigs[key] : undefined

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  return (
    <ThemeProvider>
      <ForegroundProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="portfolio"
            element={<PortfolioView config={portfolio} />}
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

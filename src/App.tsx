import React from "react"
import { Routes, Route } from "react-router-dom"
import PortfolioView from "./components/views/PortfolioView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import { ThemeProvider } from "./components/contexts/ThemeContext"
import { ForegroundProvider } from "./components/contexts/ForegroundContext"
import NotFoundView from "./components/views/NotFoundView"
import { useFixedViewportHeight } from "./components/hooks/useFixedViewportHeight"
import { portfolioConfigs } from "./config/PortfolioConfig"
import { getSubdomain } from "./utils/PathUtils"
import HomeView from "./components/views/HomeView"

function App() {
  useFixedViewportHeight()
  const subdomain = getSubdomain(window.location.hostname)
  const portfolio = subdomain ? portfolioConfigs[subdomain] : null

  return (
    <ThemeProvider>
      <ForegroundProvider>
        <Routes>
          <Route
            path="/"
            element={
              portfolio ? (
                <PortfolioView config={portfolio} />
              ) : (
                <HomeView />
              )
            }
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

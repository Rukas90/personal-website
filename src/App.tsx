import React from "react"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import HomeView from "./components/views/HomeView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import { ThemeProvider } from "./components/contexts/ThemeContext"
import { ForegroundProvider } from "./components/contexts/ForegroundContext"

function App() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    setVh()
    window.addEventListener("resize", setVh)
    window.addEventListener("scroll", setVh)

    return () => {
      window.removeEventListener("resize", setVh)
      window.removeEventListener("scroll", setVh)
    }
  }, [])
  return (
    <ThemeProvider>
      <ForegroundProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
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

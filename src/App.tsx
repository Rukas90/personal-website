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
    let updating = false

    const updateVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)

      updating = false
    }
    const updateVhRequest = () => {
      if (updating) {
        return
      }
      window.requestAnimationFrame(updateVh)
      updating = true
    }
    window.addEventListener("resize", updateVhRequest)
    window.addEventListener("scroll", updateVhRequest)
    window.addEventListener("touchmove", updateVhRequest)

    updateVh()

    return () => {
      window.removeEventListener("resize", updateVhRequest)
      window.removeEventListener("scroll", updateVhRequest)
      window.removeEventListener("touchmove", updateVhRequest)
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

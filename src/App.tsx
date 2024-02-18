import React from "react"
import { Routes, Route } from "react-router-dom"
import HomeView from "./components/views/HomeView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import { ThemeProvider } from "./components/contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      <Foreground />
      <div className="hidden xl:block">
        <Cursor />
      </div>
    </ThemeProvider>
  )
}

export default App

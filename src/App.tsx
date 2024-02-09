import React from "react"
import { Routes, Route } from "react-router-dom"
import HomeView from "./components/views/HomeView"
import Cursor from "./components/Cursor"
import Foreground from "./components/Foreground"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      <Foreground />
      <Cursor />
    </>
  )
}

export default App

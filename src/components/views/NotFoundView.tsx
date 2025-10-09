import React from "react"
import Header from "../Header"
import Content from "../Content"
import { SectionsProvider } from "../contexts/SectionsContext"
import Button from "../ui/buttons/Button"

const NotFoundView = () => {
  return (
    <SectionsProvider>
      <Header showNav={false} />
      <Content>
        <h1 className="fira-code font-bold text-[var(--accent)]">404</h1>
        <h6 className="dark:text-gray-300 text-gray-800 -mt-8">Not Found</h6>
        <Button label="Go Home" className="w-auto mt-8 mx-auto" href="/" />
      </Content>
    </SectionsProvider>
  )
}
export default NotFoundView

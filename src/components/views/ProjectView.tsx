import React from "react"
import Header from "../Header"
import Content from "../Content"
import { SectionsProvider } from "../contexts/SectionsContext"

const ProjectView = () => {
  return (
    <SectionsProvider>
      <Header />
      <Content>
        <></>
      </Content>
    </SectionsProvider>
  )
}
export default ProjectView

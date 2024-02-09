import React from "react"
import SectionContainer from "../SectionContainer"

const ContactSection = () => {
  return (
    <SectionContainer label="Contact">
      <div className="relative flex overflow-x-scroll w-full justify-center">
        <form className="flex flex-col gap-8 w-1/2">
          <div className="grid grid-cols-2 gap-8">
            <input placeholder="First name"></input>
            <input placeholder="Last name"></input>
          </div>
          <input placeholder="Email" className="w-full"></input>
          <textarea></textarea>
        </form>
      </div>
    </SectionContainer>
  )
}
export default ContactSection

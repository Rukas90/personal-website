import React, { useEffect, useRef } from "react"
import SectionContainer from "../SectionContainer"
import Button from "src/components/ui/buttons/Button"

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <SectionContainer label="Contact">
      <div className="relative flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className="contact-form flex flex-col gap-8 max-w-1/2 text-gray-200"
        >
          <div className="grid grid-cols-2 gap-8">
            <input
              required
              className="bg-gray-950 tracking-wider autofill:bg-gray-900 placeholder:text-gray-400 p-4 rounded-md"
              placeholder="First name"
            ></input>
            <input
              required
              className="bg-gray-950 tracking-wider placeholder:text-gray-400 p-4 rounded-md"
              placeholder="Last name"
            ></input>
          </div>
          <input
            required
            placeholder="Email"
            className="w-full bg-gray-950 tracking-wider placeholder:text-gray-400 p-4 rounded-md"
          ></input>
          <textarea
            required
            placeholder="Your message"
            className="bg-gray-950 tracking-wider placeholder:text-gray-400 rounded-md w-full max-h-96 min-h-96 p-8 hide-scrollbar outline-0 border-0"
          />
          <Button
            label="Send Email"
            type="submit"
            className="btn-primary mx-auto"
          />
        </form>
      </div>
    </SectionContainer>
  )
}
export default ContactSection

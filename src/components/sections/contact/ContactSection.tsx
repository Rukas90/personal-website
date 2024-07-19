import React, { useRef } from "react"
import SectionContainer from "../SectionContainer"
import Button from "src/components/ui/buttons/Button"
import InputField from "src/components/ui/InputField"

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
            <InputField required placeholder="First name" />
            <InputField required placeholder="Last name" />
          </div>
          <InputField required placeholder="Email" />
          <InputField
            required
            placeholder="Your message"
            textarea
            className="w-full max-h-96 min-h-96 p-8 hide-scrollbar"
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

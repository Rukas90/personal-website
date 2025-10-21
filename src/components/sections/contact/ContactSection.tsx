import React from "react"
import SectionContainer from "../SectionContainer"
import ContactForm from "./ContactForm"
import { SendMail } from "src/services/MailService"
import ContactEmailField from "./ContactEmailField"

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    SendMail(e.currentTarget, mailSent)
  }
  const mailSent = (
    form: HTMLFormElement,
    isSuccess: boolean,
    error?: Error
  ) => {
    form.reset()
  }
  return (
    <SectionContainer aria-label="Contact" label="Contact">
      <div className="grid lg:grid-cols-2 gazp-12 lg:gap-16">
        <div className="flex flex-col gap-6 mx-auto my-auto lg:pb-[80px]">
          <p className="text-4xl text-gray-800 dark:text-gray-200 font-semibold">Get In Touch</p>
          <p className="text-md text-gray-600 dark:text-gray-400 font-light">
            You can write me directly at:
          </p>
          <ContactEmailField />
          <p className="text-lg dark:text-gray-400 text-gray-600 font-light block lg:hidden">OR</p>
        </div>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </SectionContainer>
  )
}
export default ContactSection

import React, { useRef } from "react"
import SectionContainer from "../SectionContainer"
import EmailIcon from "src/components/ui/images/social/EmailIcon"
import useStyling from "src/components/contexts/Styling"
import ContactForm from "./ContactForm"
import { SendMail } from "src/services/MailService"

const ContactSection = () => {
  const styles = useStyling()

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
          <p className="text-4xl text-gray-200 font-semibold">Get In Touch</p>
          <p className="text-md text-gray-400 font-light">
            You can write me directly at:
          </p>
          <a href="mailto:rukas.skirkevicius@gmail.com">
            <div className="relative flex items-center max-h-7 gap-4 px-4 py-6 rounded-3xl border-[2px] border-gray-900 hover:border-gray-800 dark:active:border-teal-400 active:border-red-600">
              <EmailIcon className="w-6 h-6" fill={styles.accentColor.hex} />
              <p className="text-gray-300 tn:text-base text-sm">
                rukas.skirkevicius@gmail.com
              </p>
            </div>
          </a>
          <p className="text-lg text-gray-400 font-light block lg:hidden">OR</p>
        </div>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </SectionContainer>
  )
}
export default ContactSection

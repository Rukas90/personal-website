import React from "react"
import Button from "src/components/ui/buttons/Button"
import ContactField from "./ContactField"

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
const ContactForm = ({ onSubmit }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      className="contact-form space-y-6 text-gray-200 rounded-3xl"
      method="POST"
    >
      <div className="grid md:grid-cols-2 gap-x-6">
        <input defaultValue="Rukas Skirkevicius" id="to_name" name="to_name" hidden />
        <ContactField
          id="from_name"
          name="from_name"
          required
          prefix="01."
          label="Name:"
          placeholder="Enter your name"
          autoComplete="name"
          type="text"
          className="md:mb-0 mb-6 w-full"
        />
        <ContactField
          id="reply_to"
          name="reply_to"
          required
          prefix="02."
          label="Email:"
          placeholder="Enter your email"
          autoComplete="email"
          type="email"
          className="w-full"
        />
      </div>
      <ContactField
        id="subject"
        name="subject"
        required
        prefix="03."
        label="Subject:"
        placeholder="Enter your message subject"
        className="w-full"
      />
      <ContactField
        id="message"
        name="message"
        required
        textarea
        prefix="04."
        label="Message:"
        placeholder="Your message"
        className="w-full min-h-96"
      />
      <Button
        label="Send Email"
        type="submit"
        className="btn-primary mx-auto"
      />
    </form>
  )
}
export default ContactForm

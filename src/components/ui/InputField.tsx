import React from "react"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends GeneralProps {
  placeholder?: string
  required?: boolean
  textarea?: boolean
}

const InputField = ({ placeholder, required, textarea, className }: Props) => {
  const Component = textarea ? "textarea" : "input"

  return (
    <Component
      required={required}
      className={`${className} dark:text-gray-100 text-black dark:bg-gray-950 bg-gray-300 dark:autofill:bg-gray-900 autofill:bg-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-800 p-4 rounded-md tracking-wider outline-0 border-0`}
      placeholder={placeholder}
    />
  )
}
export default InputField

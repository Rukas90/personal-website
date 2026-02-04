import React, { HTMLInputTypeAttribute } from "react"
import { GeneralProps } from "../props/GeneralProps"
import clsx from "clsx"

export interface InputFieldProps extends GeneralProps {
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
  autoComplete?: string
  type?: HTMLInputTypeAttribute | undefined
}

const InputField = ({
  id,
  name,
  placeholder,
  required,
  textarea,
  className,
  autoComplete,
  type,
}: InputFieldProps) => {
  const Component = textarea ? "textarea" : "input"

  return (
    <Component
      id={id}
      name={name}
      required={required}
      className={clsx(
        className,
        "bg-transparent dark:!text-gray-200 !text-black dark:placeholder:text-gray-500 placeholder:text-gray-800 placeholder:text-sm !text-sm appearance-none shadow-none p-4 rounded-md !tracking-wider border-[2px] border-gray-900 hover:border-gray-800 dark:focus:border-teal-400 focus:border-red-600 transition-colors",
      )}
      placeholder={placeholder}
      data-np-autofill-field-type={type}
      autoComplete={autoComplete}
      type={type}
    />
  )
}
export default InputField

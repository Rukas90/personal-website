import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"
import InputField, { InputFieldProps } from "src/components/ui/InputField"

interface Props extends InputFieldProps, GeneralProps {
  prefix?: string
  label: string
}
const ContactField = (props: Props) => {
  return (
    <div>
      <label
        className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-400 text-left"
        htmlFor={props.id}
      >
        {props.prefix && (
          <>
            <span className="dark:text-teal-400 text-red-600 fira-code">
              {props.prefix}
            </span>{" "}
          </>
        )}
        <span>{props.label}</span>
      </label>
      <InputField
        {...props}
      />
    </div>
  )
}
export default ContactField

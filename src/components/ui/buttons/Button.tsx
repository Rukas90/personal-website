import React from "react"

interface Props {
  label?: string
  className?: string
}

const Button = ({ label, className }: Props) => {
  return (
    <button
      className={`interactable transition-all hover:shadow-xl shadow-teal-400 border-2 hover:-translate-y-1 border-teal-500 hover:border-black rounded-md px-6 py-3 hover:bg-black hover:text-white text-teal-400 ${className}`}
    >
      {label}
    </button>
  )
}
export default Button

import React from "react"

interface Props {
  text: string
  bottomMargin?: boolean
}

const SectionLabel = ({ text, bottomMargin = true }: Props) => {
  return (
    <>
      <h1 className="dark:text-teal-400 text-red-600 font-base text-3xl tracking-widest uppercase">
        {text}
      </h1>
      <div
        className={`mt-8 ${
          bottomMargin && "mb-12"
        } mx-auto w-20 h-[1px] dark:bg-teal-600 bg-red-400`}
      />
    </>
  )
}
export default SectionLabel

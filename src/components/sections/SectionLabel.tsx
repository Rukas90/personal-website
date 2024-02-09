import React from "react"

interface Props {
  text: string
  bottomMargin?: boolean
}

const SectionLabel = ({ text, bottomMargin = true }: Props) => {
  return (
    <>
      <h1 className="text-teal-400 font-base text-3xl tracking-widest uppercase">
        {text}
      </h1>
      <div
        className={`mt-8 ${
          bottomMargin && "mb-12"
        } mx-auto w-20 h-[1px] bg-teal-600`}
      />
    </>
  )
}
export default SectionLabel

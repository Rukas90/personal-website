import React from "react"

interface Props {
  id?: string
  text: string
  bottomMargin?: boolean
}

const SectionLabel = ({ id, text, bottomMargin = true }: Props) => {
  return (
    <>
      <h1
        id={id}
        className="dark:text-teal-400 text-red-600 font-base tn:text-3xl mn:text-2xl text-xl tracking-widest uppercase"
      >
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

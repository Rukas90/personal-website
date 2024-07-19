import React from "react"
import RectangleSkeleton from "../skeletons/RectangleSkeleton"
import { GeneralProps } from "src/components/props/GeneralProps"
import { LinkTarget } from "src/types/LinkTarget"

interface Props extends GeneralProps {
  label?: string
  type?: "submit" | "reset" | "button"
  showSkeleton?: boolean
  href?: string
  target?: LinkTarget
  onClick?: () => void
}

const Button = ({
  label,
  type,
  showSkeleton,
  className,
  href,
  target = "self",
  onClick,
}: Props) => {
  const classes = `
   interactable
   relative 
   transition-all 
   hover:shadow-xl 
   border-2 
   dark:border-teal-500 border-black 
   hover:-translate-y-1 
   hover:border-white dark:hover:border-black
   rounded-md 
   px-6 py-3 
   dark:hover:bg-black 
   dark:bg-transparent bg-black 
   dark:hover:text-white text-white 
   dark:text-teal-400
   hover:bg-white hover:text-black ${className || ""}`
  const content = (
    <>
      {label}
      {showSkeleton && (
        <div className="absolute top-0 left-0 w-full h-full rounded-md">
          <RectangleSkeleton className="w-full h-full rounded-md" />
        </div>
      )}
    </>
  )

  if (onClick || !href) {
    return (
      <button type={type} onClick={onClick} className={classes}>
        {content}
      </button>
    )
  } else {
    return (
      <a
        href={href}
        target={`_${target}`}
        className={`${classes} inline-block`}
        role="button"
      >
        {content}
      </a>
    )
  }
}
export default Button

import React from "react"
import TextBlock from "./text/TextBlock"
import Button from "./buttons/Button"
import { useNavigate } from "react-router-dom"
import DocumentIcon from "./images/social/DocumentIcon"
import IconButton from "./buttons/IconButton"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends GeneralProps {
  key: string
  resume: string
  subdomain: string
  role: string
  subtitle: string
}
const PortfolioCard = (props: Props) => {
  const navigate = useNavigate()

  return (
    <div className={`${props.className} flex flex-col bg-gray-50 dark:bg-[rgb(7,14,32)] gap-6 py-8 px-6 w-full min-h-[350px] justify-between`}>
      <IconButton
        icon={<DocumentIcon />}
        className={"w-8 mx-auto hover:scale-150"}
        url={props.resume}
        overrideSize
      />
      <h6 className="dark:text-teal-400 text-red-600 font-medium fira-code tracking-normal">
        {props.role}
      </h6>
      <TextBlock>{props.subtitle}</TextBlock>
      <Button
        className="text-lg mx-auto"
        label="Visit"
        onClick={() => {
          navigate("portfolio?key=" + props.subdomain)
        }}
      />
    </div>
  )
}
export default PortfolioCard

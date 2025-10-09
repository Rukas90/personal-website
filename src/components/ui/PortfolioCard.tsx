import React from "react"
import TextBlock from "./text/TextBlock"
import Button from "./buttons/Button"
import { useNavigate } from "react-router-dom"

interface Props {
  key: string
  subdomain: string
  role: string
  subtitle: string
}
const PortfolioCard = (props: Props) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-6 py-8 px-4 rounded-2xl dark:bg-[#080f21] bg-[#e2e5e9]">
      <h6 className="dark:text-teal-400 text-red-600 font-semibold tracking-wider">
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

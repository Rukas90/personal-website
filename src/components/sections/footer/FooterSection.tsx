import React from "react"
import CodePenBtn from "src/components/ui/buttons/CodePenBtn"
import GitHubBtn from "src/components/ui/buttons/GitHubBtn"
import LinkedInBtn from "src/components/ui/buttons/LinkedInBtn"
import UnityBtn from "src/components/ui/buttons/UnityBtn"

const FooterSection = () => {
  return (
    <footer className="relative w-full justify-center my-8 text-gray-300 opacity-50 tracking-wider text-center text-sm leading-6">
      <div className="flex 3xl:hidden flex-row max-w-[200px] mx-auto justify-between gap-4 mb-6">
        <CodePenBtn className={`hover:scale-150`} />
        <GitHubBtn className={`hover:scale-150`} />
        <LinkedInBtn className={`hover:scale-150`} />
        <UnityBtn className={`hover:scale-150`} />
      </div>
      <div>
        <p>Designed & Developed</p>
        <p>by Rukas Skirkevicius</p>
      </div>
    </footer>
  )
}
export default FooterSection

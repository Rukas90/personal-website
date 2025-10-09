import React from "react"
import SkillsContainer from "../SkillsContainer"
import GitIcon from "src/components/ui/images/skills/collaboration/GitIcon"
import GitHubIcon from "src/components/ui/images/skills/collaboration/GitHubIcon"
import TrelloIcon from "src/components/ui/images/skills/collaboration/TrelloIcon"

const CollaborationSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Collaboration"
        skills={[
          {
            icon: <GitIcon />,
            label: "Git",
          },
          {
            icon: <GitHubIcon />,
            label: "Github",
          },
          {
            icon: <TrelloIcon />,
            label: "Trello",
          },
        ]}
      />
    </>
  )
}
export default CollaborationSkills

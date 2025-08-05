import React from "react"
import SkillsContainer from "../SkillsContainer"

import GitIcon from "src/components/ui/images/skills/collaboration/GitIcon"
import GitHubIcon from "src/components/ui/images/skills/collaboration/GitHubIcon"
import TrelloIcon from "src/components/ui/images/skills/collaboration/TrelloIcon"
import VSCodeIcon from "src/components/ui/images/skills/collaboration/VSCodeIcon"

const CollaborationSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Collaboration"
        skills={[
          { icon: <GitIcon />, label: "Git", url: "https://git-scm.com/" },
          { icon: <GitHubIcon />, label: "Github", url: "https://github.com/" },
          { icon: <TrelloIcon />, label: "Trello", url: "https://trello.com/" },
          {
            icon: <VSCodeIcon />,
            label: "VS Code",
            url: "https://code.visualstudio.com/",
          },
        ]}
      />
    </>
  )
}
export default CollaborationSkills

import React from "react"
import SkillsContainer from "./SkillsContainer"

import git from "img/skills/git.svg"
import github from "img/skills/github.svg"
import trello from "img/skills/trello.svg"
import vscode from "img/skills/vs-code.svg"

const CollaborationSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Collaboration"
        skills={[
          { icon: git, label: "Git" },
          { icon: github, label: "Github" },
          { icon: trello, label: "Trello" },
          { icon: vscode, label: "VS Code" },
        ]}
      />
    </>
  )
}
export default CollaborationSkills

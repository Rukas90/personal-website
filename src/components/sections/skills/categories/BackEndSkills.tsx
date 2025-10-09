import React from "react"
import SkillsContainer from "../SkillsContainer"

import PostmanIcon from "src/components/ui/images/skills/back-end/PostmanIcon"
import RESTIcon from "src/components/ui/images/skills/back-end/RESTIcon"
import NodeJSIcon from "src/components/ui/images/skills/back-end/NodeJSIcon"
import ExpressJSIcon from "src/components/ui/images/skills/back-end/ExpressJSIcon"
import PostgresIcon from "src/components/ui/images/skills/back-end/PostgresIcon"
import FirebaseIcon from "src/components/ui/images/skills/back-end/FirebaseIcon"
import DotNetCoreIcon from "src/components/ui/images/skills/back-end/DotNetCoreIcon"

const BackEndSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Back end"
        skills={[
          {
            icon: <DotNetCoreIcon />,
            label: "AspNetCore",
          },
          {
            icon: <PostmanIcon />,
            label: "Postman",
          },
          {
            icon: <RESTIcon />,
            label: "REST",
          },
          {
            icon: <NodeJSIcon />,
            label: "NodeJS",
          },
          {
            icon: <ExpressJSIcon />,
            label: "ExpressJS",
          },
          {
            icon: <PostgresIcon />,
            label: "Postgres",
          },
          {
            icon: <FirebaseIcon />,
            label: "Firebase",
          },
        ]}
      />
    </>
  )
}
export default BackEndSkills

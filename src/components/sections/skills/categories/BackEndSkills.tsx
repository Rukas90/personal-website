import React from "react"
import SkillsContainer from "../SkillsContainer"

import PostmanIcon from "src/components/ui/images/skills/back-end/PostmanIcon"
import RESTIcon from "src/components/ui/images/skills/back-end/RESTIcon"
import NodeJSIcon from "src/components/ui/images/skills/back-end/NodeJSIcon"
import ExpressJSIcon from "src/components/ui/images/skills/back-end/ExpressJSIcon"
import PostgresIcon from "src/components/ui/images/skills/back-end/PostgresIcon"
import FirebaseIcon from "src/components/ui/images/skills/back-end/FirebaseIcon"

const BackEndSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Back end"
        skills={[
          {
            icon: <PostmanIcon />,
            label: "Postman",
            url: "https://www.postman.com/",
          },
          { icon: <RESTIcon />, label: "REST", url: "https://restfulapi.net/" },
          {
            icon: <NodeJSIcon />,
            label: "NodeJS",
            url: "https://nodejs.org/en",
          },
          {
            icon: <ExpressJSIcon />,
            label: "ExpressJS",
            url: "https://expressjs.com/",
          },
          {
            icon: <PostgresIcon />,
            label: "Postgres",
            url: "https://www.postgresql.org/",
          },
          {
            icon: <FirebaseIcon />,
            label: "Firebase",
            url: "https://firebase.google.com/",
          },
        ]}
      />
    </>
  )
}
export default BackEndSkills

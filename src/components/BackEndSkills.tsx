import React from "react"
import SkillsContainer from "./SkillsContainer"

import postman from "img/skills/postman.svg"
import rest from "img/skills/rest.svg"
import nodejs from "img/skills/nodejs.svg"
import expressjs from "img/skills/expressjs.svg"
import postgresql from "img/skills/postgresql.svg"
import firebase from "img/skills/firebase.svg"

const BackEndSkills = () => {
  return (
    <>
      <SkillsContainer
        label="Back end"
        skills={[
          { icon: postman, label: "Postman" },
          { icon: rest, label: "REST" },
          { icon: nodejs, label: "NodeJS" },
          { icon: expressjs, label: "ExpressJS" },
          { icon: postgresql, label: "Postgres" },
          { icon: firebase, label: "Firebase" },
        ]}
      />
    </>
  )
}
export default BackEndSkills

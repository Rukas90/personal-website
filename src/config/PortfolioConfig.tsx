import React from "react"
import { ReactNode } from "react"
import { ProjectData } from "src/types/ProjectData"

import fullstackSkills from "src/data/skills/fullstack.json"
import dotnetSkills from "src/data/skills/dotnet.json"

import secureDashboard from "src/data/projects/secure-dashboard.json"
import portfolioWebsite from "src/data/projects/portfolio-website.json"
import ithoDaalderopAr from "src/data/projects/itho-daalderop-ar.json"
import pixelHarmony from "src/data/projects/pixel-harmony.json"
import pixelHarmonySite from "src/data/projects/pixel-harmony-site.json"
import secureGameApi from "src/data/projects/secure-game-api.json"

import dotnetPortfolio from "public/Rukas CV .NET.pdf"
import fullstackPortfolio from "public/Rukas CV FullStack.pdf"

export type SkillData = {
  label: string
  skills: string[]
}
export type PortfolioIntroData = {
  role: string
  subtitle: string
}
export type PortfolioProjects = {
  featured: ProjectData[]
  listed: ProjectData[]
}
export type PortfolioConfig = {
  resumeUrl: string
  intro: PortfolioIntroData
  about: ReactNode
  skills: SkillData[]
  projects: PortfolioProjects
}
export const portfolioConfigs: Record<string, PortfolioConfig> = {
  fullstack: {
    resumeUrl: fullstackPortfolio,
    intro: {
      role: "FullStack Developer",
      subtitle:
        "Specializing in building scalable and efficient backend systems and fully responsive, seamless front-end UI/UX websites.",
    },
    about: (
      <>
        <span>
          Hi there! I'm Rukas Skirkevicius, a full stack developer. I love
          tackling complex projects, constantly embracing new technologies and
          frameworks.
        </span>
        <span>
          My journey has led me to work on a variety of projects, ranging from
          Android, AR applications to Unity tools, games, and 3D modeling.
          However, my professional focus remains steadfast on full stack
          development.
        </span>
        <span>
          Outside work, I love to spend time outdoors, hiking and camping,
          playing video games, and dedicate time to learning guitar.
        </span>
      </>
    ),
    skills: fullstackSkills,
    projects: {
      featured: [secureDashboard as ProjectData],
      listed: [
        portfolioWebsite as ProjectData,
        pixelHarmonySite as ProjectData,
        ithoDaalderopAr as ProjectData,
        secureGameApi as ProjectData,
        pixelHarmony as ProjectData,
      ],
    },
  },
  dotnet: {
    resumeUrl: dotnetPortfolio,
    intro: {
      role: ".NET Developer",
      subtitle:
        "Primarily specializing in building scalable and efficient backend systems.",
    },
    about: (
      <>
        <span>
          Hi there! I'm Rukas Skirkevicius, a .NET backend developer. I love
          tackling complex projects, constantly embracing new technologies and
          frameworks.
        </span>
        <span>
          My journey has led me to work on a variety of projects, ranging from
          Android, AR applications to Unity tools, games, and 3D modeling.
          However, my professional focus remains steadfast on .NET backend
          development.
        </span>
        <span>
          Outside work, I love to spend time outdoors, hiking and camping,
          playing video games, and dedicate time to learning guitar.
        </span>
      </>
    ),
    skills: dotnetSkills,
    projects: {
      featured: [secureGameApi as ProjectData],
      listed: [
        portfolioWebsite as ProjectData,
        pixelHarmony as ProjectData,
        ithoDaalderopAr as ProjectData,
        pixelHarmonySite as ProjectData,
        secureDashboard as ProjectData,
      ],
    },
  },
}

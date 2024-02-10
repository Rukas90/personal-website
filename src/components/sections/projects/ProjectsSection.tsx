import React, { useEffect, useMemo, useRef, useState } from "react"
import SectionContainer from "../SectionContainer"
import FeaturedProjectViewer from "./FeaturedProjectViewer"
import { ProjectData } from "src/types/ProjectData"

const projectImports = import.meta.glob<ProjectData[]>(
  "/public/data/projects/*.json",
  { eager: false }
)
const importFunctions = Object.values(projectImports)

const ProjectsSection = () => {
  const [viewingIndex, setViewingIndex] = useState<number>(0)

  const currentTask = useRef<Promise<{ default: ProjectData }> | null>(null)

  const totalProjectsLength = Object.keys(projectImports).length

  const projects = useRef(Array(totalProjectsLength).fill(null))
  const [statuses, setStatuses] = useState(
    Array(totalProjectsLength).fill(false)
  )

  const setProjectStatus = (index: number, status: boolean) => {
    setStatuses((current) => {
      return current.map((item, i) => (i === index ? status : item))
    })
  }
  const setProject = async (index: number) => {
    if (index < 0 || index >= importFunctions.length) {
      console.error("Project index out of bounds:", index)

      return
    }
    const p = projects.current

    setViewingIndex(index)

    if (p[index] !== null) {
      return // Project is already loaded ...
    }
    if (statuses[index]) {
      return // Currently loading ...
    }
    try {
      setProjectStatus(index, true)

      const importFn: () => Promise<{ default: ProjectData }> = importFunctions[
        index
      ] as unknown as () => Promise<{ default: ProjectData }>

      currentTask.current = importFn()

      const module = await currentTask.current
      const projectData: ProjectData = module.default

      // Cache the loaded project
      projects.current = p.map((item, i) => (i === index ? projectData : item))

      setProjectStatus(index, false)
    } catch (error) {
      console.error("Failed while fetching project data: ", error)
    }
  }

  useEffect(() => {
    setProject(0)
  }, [])

  const currentProject = useMemo(
    () => projects.current.at(viewingIndex),
    [viewingIndex, statuses]
  )
  const currentStatus = useMemo(
    () => statuses.at(viewingIndex),
    [viewingIndex, statuses]
  )
  return (
    <SectionContainer label="Featured Projects">
      <div className="relative flex w-full ">
        {!currentProject ? (
          <>Project Not Loaded!</>
        ) : (
          <FeaturedProjectViewer
            {...currentProject}
            index={viewingIndex + 1}
            showSkeleton={currentStatus}
          />
        )}
      </div>
    </SectionContainer>
  )
}
export default ProjectsSection

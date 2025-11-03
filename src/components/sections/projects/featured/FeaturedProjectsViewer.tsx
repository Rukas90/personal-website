import React, { useCallback, useMemo, useState } from "react"
import FeaturedProjectDisplay from "./FeaturedProjectDisplay"
import { ProjectData } from "src/types/ProjectData"
import { WrapIndex } from "src/utils/Math"
import { GeneralProps } from "src/components/props/GeneralProps"

interface Props extends GeneralProps {
  projects: ProjectData[] | ProjectData
  reverse: boolean
}
const FeaturedProjectsViewer = ({ projects, reverse, className }: Props) => {
  const [viewingIndex, setViewingIndex] = useState(0)
  const projectsCount = Array.isArray(projects) ? projects.length : 1

  const setIndex = useCallback((index: number) => {
    setProject(WrapIndex(index, projectsCount))
  }, [])
  const setProject = useCallback((newIndex: number) => {
    setViewingIndex(newIndex)
  }, [])

  const currentProject = useMemo(
    () => Array.isArray(projects) ? projects[viewingIndex] : projects,
    [viewingIndex, projects]
  )
  const hasProject = currentProject !== null || currentProject !== undefined

  return (
    <div className={className}>
      <FeaturedProjectDisplay
        key={viewingIndex + 1}
        {...currentProject}
        projectsCount={projectsCount}
        index={viewingIndex}
        showSkeleton={!hasProject}
        showPrevious={() => setIndex(viewingIndex - 1)}
        showNext={() => setIndex(viewingIndex + 1)}
        setIndex={setIndex}
        reverse={reverse}
      />
    </div>
  )
}
export default FeaturedProjectsViewer

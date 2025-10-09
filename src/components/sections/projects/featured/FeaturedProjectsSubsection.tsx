import React, { useCallback, useMemo, useState } from "react"
import FeaturedProjectDisplay from "./FeaturedProjectDisplay"
import FeaturedProjectSelectionNav from "./FeaturedProjectSelectionNav"
import { WrapIndex } from "src/utils/Math"
import { ProjectData } from "src/types/ProjectData"

const FeaturedProjectsSubsection = ({ projects }: {projects: ProjectData[]}) => {
  const [viewingIndex, setViewingIndex] = useState(0)

  const projectsCount = projects.length

  const setIndex = useCallback((index: number) => {
    setProject(WrapIndex(index, projectsCount))
  }, [])
  const setProject = useCallback((newIndex: number) => {
    setViewingIndex(newIndex)
  }, [])

  const currentProject = useMemo(
    () => projects[viewingIndex],
    [viewingIndex, projects]
  )
  const hasProject = currentProject !== null || currentProject !== undefined

  return (
    <div aria-label="Featured Projects">
      <FeaturedProjectDisplay
        key={viewingIndex + 1}
        {...currentProject}
        index={viewingIndex + 1}
        showSkeleton={!hasProject}
        showPrevious={() => setIndex(viewingIndex - 1)}
        showNext={() => setIndex(viewingIndex + 1)}
      />
      <FeaturedProjectSelectionNav
        filesCount={projectsCount}
        setIndex={setIndex}
        viewingIndex={viewingIndex}
      />
    </div>
  )
}
export default FeaturedProjectsSubsection

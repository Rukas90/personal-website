import { useEffect, useState } from "react"
import { ProjectData } from "src/types/ProjectData"
import useFetchFiles from "components/hooks/useFetchFiles"

const useFeaturedProjects = () => {
  const { fetch, files, statuses, filesCount } = useFetchFiles<ProjectData>(
    import.meta.glob<ProjectData[]>(`/src/data/projects/featured/*.json`, {
      eager: false,
    })
  )
  const [viewingIndex, setViewingIndex] = useState<number>(0)

  const fetchProject = async (index: number) => {
    const status = await fetch(index)

    if (status < 0) {
      return
    }
    setViewingIndex(index)
  }

  return {
    viewingIndex,
    setViewingIndex,
    projects: files,
    statuses,
    fetchProject,
    filesCount,
  }
}
export default useFeaturedProjects

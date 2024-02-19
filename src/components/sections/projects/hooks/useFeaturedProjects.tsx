import { useEffect, useState } from "react"
import { ProjectData } from "src/types/ProjectData"
import useFetchFiles from "components/hooks/useFetchFiles"

const useFeaturedProjects = () => {
  const { fetch, files, statuses } = useFetchFiles<ProjectData>(
    import.meta.glob<ProjectData[]>(`/public/data/projects/featured/*.json`, {
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

  useEffect(() => {
    fetchProject(0)
  }, [])

  return {
    viewingIndex,
    setViewingIndex,
    projects: files,
    statuses,
    fetchProject,
  }
}
export default useFeaturedProjects

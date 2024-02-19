import { useEffect, useState } from "react"
import { ProjectData } from "src/types/ProjectData"
import useFetchFiles from "components/hooks/useFetchFiles"

const useListedProjects = () => {
  const LOAD_BATCH_SIZE = 6

  const { fetch, files, statuses, filesCount } = useFetchFiles<ProjectData>(
    import.meta.glob<ProjectData[]>(`/public/data/projects/listed/*.json`, {
      eager: false,
    })
  )
  const [loadedCount, setLoadedCount] = useState<number>(0)

  const loadBatch = async () => {
    const batchSize = Math.min(LOAD_BATCH_SIZE, filesCount - loadedCount)

    const functions = Array.from({ length: batchSize }, (_, i) => {
      const index = loadedCount + i

      return fetch(index)
    })
    try {
      await Promise.all(functions)
      setLoadedCount((current) => current + batchSize)
    } catch (error) {
      console.error("Error while fetching list projects", error)
    }
  }

  useEffect(() => {
    loadBatch()
  }, [])

  return {
    loadedCount,
    projects: files,
    statuses,
    loadBatch,
  }
}
export default useListedProjects

import { useMemo, useState } from "react"
import { ProjectData } from "src/types/ProjectData"
import useFetchFiles from "components/hooks/useFetchFiles"

const useListedProjects = () => {
  const LOAD_BATCH_SIZE = 3

  const { fetch, files, statuses, filesCount } = useFetchFiles<ProjectData>(
    import.meta.glob<ProjectData[]>(`/src/data/projects/listed/*.json`, {
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

  const loadedProjects = useMemo(() => {
    return files.slice(0, loadedCount)
  }, [files, loadedCount, statuses])

  return {
    loadedCount,
    projects: loadedProjects,
    statuses,
    loadBatch,
    filesCount,
  }
}
export default useListedProjects

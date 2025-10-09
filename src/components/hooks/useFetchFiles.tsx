import { useRef, useState } from "react"

const useFetchFiles = <T,>(imports: Record<string, () => Promise<T[]>>) => {
  const importFunctions = Object.values(imports)
  const currentTask = useRef<Promise<{ default: T }> | null>(null)
  const totalLength = Object.keys(imports).length

  const [files, setFiles] = useState(Array(totalLength).fill(null))

  const [statuses, setStatuses] = useState(Array(totalLength).fill(false))

  const setStatus = (index: number, status: boolean) => {
    setStatuses((current) => {
      return current.map((item, i) => (i === index ? status : item))
    })
  }
  const fetch = async (index: number): Promise<number> => {
    if (index < 0 || index >= importFunctions.length) {
      console.error("File index out of bounds:", index)

      return -2
    }
    const p = files

    if (p[index] !== null) {
      return 1 // File is already loaded ...
    }
    if (statuses[index]) {
      return 0 // Currently loading ...
    }
    try {
      setStatus(index, true)

      const importFn: () => Promise<{ default: T }> = importFunctions[
        index
      ] as unknown as () => Promise<{ default: T }>

      currentTask.current = importFn()

      const module = await currentTask.current
      const data: T = module.default

      // Cache the loaded file
      setFiles((current) => {
        return current.map((item, i) => (i === index ? data : item))
      })
      setStatus(index, false)

      return 1
    } catch (error) {
      console.error("Failed while fetching file data: ", error)

      return -1
    }
  }

  return { files, statuses, fetch, filesCount: totalLength }
}
export default useFetchFiles

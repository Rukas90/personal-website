import React, { useEffect, useMemo, useRef, useState } from "react"
import useListedProjects from "../hooks/useListedProjects"
import ListedProjectDisplay from "./ListedProjectDisplay"
import Button from "src/components/ui/buttons/Button"
import useSelfIntersection, {
  IntersectionChangeData,
} from "src/components/hooks/useSelfIntersection"

const ListedProjectsSubsection = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { loadedCount, projects, loadBatch, statuses, filesCount } =
    useListedProjects()

  const onIntersectionChange = (data: IntersectionChangeData) => {
    if (!data.isIntersecting || data.observed) {
      return
    }
    loadBatch()
  }
  const _ = useSelfIntersection(ref, onIntersectionChange)

  const loadMore = () => {
    loadBatch()

    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView()
      }
    }, 100)
  }

  return (
    <>
      <div
        ref={ref}
        className="w-full basis-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 mt-24"
      >
        {projects?.map((project, index) => (
          <ListedProjectDisplay
            key={index}
            {...project}
            showSkeleton={statuses.at(index) || !project}
          />
        ))}
      </div>
      {loadedCount < filesCount && (
        <div className="mt-8">
          <Button onClick={loadMore} label="Load more" />
        </div>
      )}
    </>
  )
}
export default ListedProjectsSubsection

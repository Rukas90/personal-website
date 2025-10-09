import React from "react"
import { GeneralProps } from "src/components/props/GeneralProps"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import Button from "src/components/ui/buttons/Button"
import { Slug } from "src/types/Slug"

interface Props extends SkeletonProps, GeneralProps {
  slug: Slug
}

const ProjectSlugButton = ({ slug, showSkeleton, className }: Props) => {
  return (
    <div className={className}>
      <Button
        showSkeleton={showSkeleton}
        className="fade-left tn:text-sm text-base"
        label={slug?.label ?? "Learn More"}
        href={slug?.url}
        target={slug?.target}
      />
    </div>
  )
}
export default ProjectSlugButton

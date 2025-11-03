import Markdown from "markdown-to-jsx"
import React from "react"
import useStyling from "src/components/contexts/Styling"
import { ContextSource } from "src/components/props/PictureData"
import { SkeletonProps } from "src/components/props/SkeletonProps"
import LinkIcon from "src/components/ui/images/misc/LinkIcon"
import RectangleSkeleton from "src/components/ui/skeletons/RectangleSkeleton"
import LinkText from "src/components/ui/text/LinkText"
import ParagraphBlock from "src/components/ui/text/ParagraphBlock"

interface Props extends SkeletonProps {
  sources?: ContextSource[]
  summary: string
}

const FeaturedProjectSummary = ({ showSkeleton, sources, summary }: Props) => {
  const styling = useStyling()

  return (
    <div className="tn:py-1 pb-6 min-h-52 xl:max-h-52 overflow-y-scroll dark:font-light tn:text-sm text-xs tn:text-justify tn:tracking-wider tracking-widest">
      {showSkeleton ? (
        <div className="space-y-3">
          <RectangleSkeleton className="w-1/2 h-4" />
          <RectangleSkeleton className="w-1/4 h-4" />
          <div className="space-y-3">
            <RectangleSkeleton className="w-1/3 h-4 mt-8" />
            <RectangleSkeleton className="w-full h-4" />
          </div>
        </div>
      ) : (
        <div className="relative fade-in">
          {sources && (
            <div className="relative w-full mb-4 overflow-x-auto overflow-y-hidden">
              <div className="inline-flex flex-wrap items-center gap-2 max-w-full">
                <div className="w-4 my-auto">
                  <LinkIcon />
                </div>
                {sources.map((source, index) => {
                  return (
                    <>
                      <LinkText
                        key={"project-link-source-text-" + index}
                        label={source.label}
                        url={source.url}
                        target={"_blank"}
                        className="fira-code font-medium tracking-tight"
                      />
                      {index < sources.length - 1 && (
                        <span
                          className={`-ml-2 mr-1 fira-code ${styling.accentDimColor.tailwind}`}
                        >
                          ,
                        </span>
                      )}
                    </>
                  )
                })}
              </div>
            </div>
          )}
          <ParagraphBlock className="text-sm tn:text-start text-center">
            <Markdown>{summary || ""}</Markdown>
          </ParagraphBlock>
        </div>
      )}
    </div>
  )
}
export default FeaturedProjectSummary

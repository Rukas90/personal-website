import React, { useMemo } from "react"
import { GeneralProps } from "../props/GeneralProps"
import { ImageExtensions, ImageFile, IsImageFile } from "../props/PictureData"
import { formatFilePath } from "src/utils/FormattingUtils"

interface Props extends GeneralProps {
  path: string
  file: string | ImageFile
  extensions: ImageExtensions
  alt?: string
}
const ImagePicture = ({ path, file, extensions, alt, className }: Props) => {
  const fileSrc = useMemo(
    () => (typeof file === "string" ? file : file.src),
    [file]
  )
  return (
    <picture className={className}>
      {extensions.sources.map((source) => {
        if (IsImageFile(file) && file.excludeFormats?.includes(source)) {
          return
        }
        return (
          <source
            key={`${fileSrc}-${source}`}
            srcSet={formatFilePath(path, fileSrc, source)}
            type={`image/${source}`}
          />
        )
      })}
      <img
        src={formatFilePath(path, fileSrc, extensions.fallback)}
        alt={alt ?? "fallback image"}
        loading="lazy"
      />
    </picture>
  )
}
export default ImagePicture

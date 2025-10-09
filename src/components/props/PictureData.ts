export type ImageExtension = "avif" | "webp" | "jpg"

export type ImageExtensions = {
    sources: ImageExtension[]
    fallback: ImageExtension
}
export type ImageFile = {
    src: string,
    excludeFormats?: string[]
}
export type GalleryData = {
    path: string,
    extensions: ImageExtensions
    files: (string|ImageFile)[]
}
export const IsImageFile = (f: string | ImageFile): f is ImageFile =>
  typeof f === "object" && "src" in f
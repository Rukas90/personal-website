import { GalleryData } from "./PictureData"

export interface SlideshowProps {
  showSkeleton?: boolean
  gallery?: GalleryData
  entryIndex: number,
  setEntryIndex: React.Dispatch<React.SetStateAction<number>>
}
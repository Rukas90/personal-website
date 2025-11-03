import { GalleryData } from "src/components/props/PictureData"
import { Link } from "./Link"
import { Slug } from "./Slug"

export type ProjectData = {
    title: string,
    subtitle: string,
    gallery?: GalleryData,
    label: string,
    summary: string,
    tools: string[],
    links: Link[],
    slug: Slug
}
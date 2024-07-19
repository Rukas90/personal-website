import { Link } from "./Link"
import { Slug } from "./Slug"

export type ProjectData = {
    title: string,
    subtitle: string,
    images: string[],
    label: string,
    summary: string,
    tools: string[],
    links: Link[],
    slug: Slug
}
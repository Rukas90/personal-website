import { Link } from "./Link"

export type ProjectData = {
    title: string,
    subtitle: string,
    bannerBg: string,
    label: string,
    summary: string,
    tools: string[],
    links: Link[],
    slug: string
}
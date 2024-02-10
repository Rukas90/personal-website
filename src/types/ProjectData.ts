import { Link } from "src/types/Link";

export type ProjectData = {
    title: string,
    subtitle: string,
    bannerSrc: string,
    label: string,
    summary: string,
    tools: string[],
    links: Link[],
    slug: string
}
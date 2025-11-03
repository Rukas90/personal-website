export type ImageExtension = "avif" | "webp" | "jpg"

export type ImageExtensions = {
    sources: ImageExtension[]
    fallback: ImageExtension
}
type BaseEntry = {
    summary?: string
}
export type ImageFile = BaseEntry & {
    kind: "image",
    src: string,
    excludeFormats?: string[]
}
export type YouTubeVideo = BaseEntry & {
    kind: "youtube"
    videoId: string
}
export type VimeoVideo = BaseEntry & {
    kind: "vimeo"
    videoUrl: string
}
export type GalleryData = {
    path: string,
    extensions: ImageExtensions
    entries: GalleryEntry[]
}
export type VideoEntry = YouTubeVideo | VimeoVideo
export type GalleryEntry = string | ImageFile | VideoEntry

export const FindFirstGalleryImageIndex = (gallery?: GalleryData) => {
    if (!gallery) {
        return -1
    }
    for (let i = 0; i < gallery.entries.length; i++) {
        const file = gallery.entries[i]
        if (!file || GalleryEntryType.isImage(file)) {
            continue
        }
        return i
    }
    return -1
}
export const GalleryEntryType = {
    isImage(entry: GalleryEntry): entry is ImageFile {
        return typeof entry === "string" || (typeof entry === "object" && entry !== null && "src" in entry)
    },
    isVideo(entry: GalleryEntry): entry is YouTubeVideo | VimeoVideo {
        return typeof entry === "object" && entry !== null && "kind" in entry && entry.kind !== "image"
    },
    isYouTube(entry: GalleryEntry): entry is YouTubeVideo {
        return GalleryEntryType.isVideo(entry) && entry.kind === "youtube"
    }
}
export const GetGalleryEntrySummary = (entry: GalleryEntry): string | null => {
    if (typeof entry === "string") {
        return null
    }
    return entry.summary ?? null
}
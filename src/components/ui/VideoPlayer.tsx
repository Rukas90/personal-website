import React from "react"
import YouTube from "react-youtube"
import { GalleryEntryType, VideoEntry } from "../props/PictureData"
import { GeneralProps } from "../props/GeneralProps"

interface Props extends GeneralProps {
  video: VideoEntry
  onPlay?: () => void
}
const VideoPlayer = ({ video, onPlay, className }: Props) => {
  if (GalleryEntryType.isYouTube(video)) {
    return (
      <YouTube
        videoId={video.videoId}
        onPlay={onPlay}
        className={className}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
            controls: 1,
          },
        }}
      />
    )
  }
}
export default VideoPlayer

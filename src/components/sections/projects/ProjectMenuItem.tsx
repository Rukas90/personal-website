import React from "react"
import banner from "img/projects/pixel-harmony-banner.png"
import Button from "src/components/ui/buttons/Button"
import UnityBtn from "src/components/ui/buttons/derives/UnityBtn"
import SiteBtn from "src/components/ui/buttons/derives/SiteBtn"

const ProjectMenuItem = () => {
  return (
    <div className="relative flex flex-row rounded-2xl my-4 w-full">
      <div className="w-1/2 flex justify-center items-center">
        <img src={banner} className="project-banner" />
      </div>
      <div className="w-1/2 ps-8 flex flex-col text-gray-100 justify-center items-start tracking-wider space-y-3">
        <ul className="flex gap-4 justify-end w-full">
          <li className="font-bold text-xs bg-teal-400 text-gray-950 px-4 py-1 rounded-3xl">
            Editor Plugin
          </li>
        </ul>
        <p className="text-gray-400 pb-1">Image Editing Plugin for Unity</p>
        <p className="text-4xl font-semibold">
          <span className="font-light text-teal-400">1. </span>
          <span>Pixel Harmony</span>
        </p>
        <p className="py-4 font-light text-sm text-justify">
          Pixel Harmony is an image editing plugin for the Unity engine. It
          offers an array of image manipulation tools, extending your creative
          scope without leaving the Unity environment.
          <br />
          <br />
          Greatly minimize the back-and-forth with external software. With Pixel
          Harmony, enjoy the convenience of making timely, efficient edits to
          your images within the Unity workspace.
        </p>
        <div className="flex gap-3 text-sm">
          <span className="font-semibold text-teal-400">Built using:</span>
          <ul className="flex gap-2 text-gray-300 text-sm">
            <li>Unity,</li>
            <li>C#,</li>
            <li>HLSL</li>
          </ul>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-x-4 items-center">
            <UnityBtn
              svg={{ fill: "#2dd4bf" }}
              className="scale-75 hover:scale-125"
            />
            <SiteBtn
              svg={{ fill: "#2dd4bf" }}
              className="scale-75 hover:scale-125"
            />
          </div>
          <Button label="Learn more" />
        </div>
      </div>
    </div>
  )
}
export default ProjectMenuItem

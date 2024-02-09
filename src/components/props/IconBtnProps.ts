import { SvgIconProps } from "./SvgIconProps"

export interface IconButtonProps {
    url?: string
    onClick?: () => void
    className?: string
    svg?: SvgIconProps
    hidden?: boolean
}
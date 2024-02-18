import { GeneralProps } from "./GeneralProps"
import { SvgIconProps } from "./SvgIconProps"

export interface IconButtonProps extends GeneralProps {
    url?: string
    onClick?: () => void
    svg?: SvgIconProps
    hidden?: boolean
}
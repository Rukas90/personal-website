import { GeneralProps, StyleProps } from "src/components/props/GeneralProps"

export interface Sentence extends GeneralProps, StyleProps {
    text: string
    typeSpeed?: number
    pause?: number
    inline?: boolean
    useLastSentenceClasses?: boolean
}
import { GeneralProps } from "src/components/props/GeneralProps"

export interface Sentence extends GeneralProps {
    text: string
    typeSpeed?: number
    pause?: number
    inline?: boolean
    useLastSentenceClasses?: boolean
}
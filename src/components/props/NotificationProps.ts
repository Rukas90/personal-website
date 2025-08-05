import { NotificationType } from "types/NotificationType"

export type NotificationProps = {
    message: LocalizableText
    type?: NotificationType
    lifespan?: number
}
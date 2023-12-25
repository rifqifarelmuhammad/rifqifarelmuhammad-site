import { IconType } from "react-icons"

export type ContactType = 'LINKEDIN' | 'MAIL' | 'GITHUB'

export interface ContactInterface {
    type: ContactType
    Icon: IconType
    url: string
}

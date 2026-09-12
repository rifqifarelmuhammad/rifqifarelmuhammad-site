import { IconType } from 'react-icons'

type ContactType = 'LINKEDIN' | 'MAIL' | 'GITHUB' | 'MEDIUM'

interface ContactInterface {
  type: ContactType
  Icon: IconType
  url: string
}

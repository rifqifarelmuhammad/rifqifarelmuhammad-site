import { IconType } from 'react-icons'

export interface MenuInterface {
  label: string
  url: string
  Icon: IconType
}

export interface NavLinkProps extends MenuInterface {
  currentLocation: string
}

import { IconType } from 'react-icons'

interface MenuInterface {
  label: string
  url: string
  Icon: IconType
}

interface NavLinkProps extends MenuInterface {
  currentLocation: string
}

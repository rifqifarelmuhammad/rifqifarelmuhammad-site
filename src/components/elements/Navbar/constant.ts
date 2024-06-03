import { AiFillHome } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'
import { BiPhone } from 'react-icons/bi'
import { MenuInterface } from './interface'

export const MENUS: MenuInterface[] = [
  {
    label: 'Home',
    url: '/',
    Icon: AiFillHome,
  },
  {
    label: 'Projects',
    url: '/projects',
    Icon: FaCode,
  },
  {
    label: 'Contacts',
    url: '/#contacts',
    Icon: BiPhone,
  },
]

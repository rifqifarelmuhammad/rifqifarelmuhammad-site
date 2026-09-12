import { AiFillHome } from 'react-icons/ai'
import {
  FaBookOpen,
  FaBriefcase,
  FaCode,
  FaTools,
  FaUser,
} from 'react-icons/fa'
import { BiPhone } from 'react-icons/bi'
import { MenuInterface } from '../types/navbar'

export const MENUS: MenuInterface[] = [
  {
    label: 'Home',
    url: '/',
    Icon: AiFillHome,
  },
  {
    label: 'About',
    url: '/#about',
    Icon: FaUser,
  },
  {
    label: 'Experience',
    url: '/#experience',
    Icon: FaBriefcase,
  },
  {
    label: 'Projects',
    url: '/#projects',
    Icon: FaCode,
  },
  {
    label: 'Publications',
    url: '/#publications',
    Icon: FaBookOpen,
  },
  {
    label: 'Tech Stack',
    url: '/#tech-stack',
    Icon: FaTools,
  },
  {
    label: 'Contacts',
    url: '/#contacts',
    Icon: BiPhone,
  },
]

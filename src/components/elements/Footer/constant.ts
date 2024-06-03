import { ContactInterface } from './interface'
import { GrGithub, GrLinkedin } from 'react-icons/gr'
import { TfiEmail } from 'react-icons/tfi'
import { BsMedium } from 'react-icons/bs'

export const CONTACTS: ContactInterface[] = [
  {
    type: 'MAIL',
    Icon: TfiEmail,
    url: 'rifqifarel222@gmail.com',
  },
  {
    type: 'GITHUB',
    Icon: GrGithub,
    url: 'https://github.com/rifqifarelmuhammad',
  },
  {
    type: 'LINKEDIN',
    Icon: GrLinkedin,
    url: 'https://www.linkedin.com/in/rifqi-farel-muhammad',
  },
  {
    type: 'MEDIUM',
    Icon: BsMedium,
    url: 'https://medium.com/@rifqifarel222',
  },
]

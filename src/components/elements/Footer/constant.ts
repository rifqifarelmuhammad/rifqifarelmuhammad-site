import { ContactInterface } from './interface'
import { GrGithub, GrLinkedin, GrMailOption } from 'react-icons/gr'

export const getContacts = () => {
  return [
    {
      type: 'MAIL',
      Icon: GrMailOption,
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
  ] as ContactInterface[]
}

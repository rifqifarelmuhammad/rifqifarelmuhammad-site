import {
  Cloudinary,
  Docker,
  Gcp,
  Golang,
  Grafana,
  Java,
  Nest,
  Next,
  Postgresql,
  Prometheus,
  Spring,
  Tailwind,
  Typescript,
} from '@icons'
import { ProjectCardProps } from './interface'

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Personal Website',
    imageUrl: 'v1703755830/personal-website_tya35z.png',
    description:
      'The place where I put my information, such as skills, projects, and contacts.',
    techStacks: [Next, Typescript, Tailwind, Cloudinary],
    webProps: {
      logoUrl: '/icons/favicon.ico',
      webUrl: 'https://rifqifarelmuhammad.vercel.app/',
    },
    githubUrl: 'https://github.com/orgs/SIUUU-CORP/repositories',
  },
  {
    title: 'Warecloud',
    imageUrl: 'v1703596001/warecloud_xhravc.png',
    description:
      'An application that allows a warehouse to integrate its branches so that each branch can request and send items to each other, enabling fast and\
      efficient supply chain connectivity. Additionally, customers can order items online on Warecloud.',
    techStacks: [Nest, Typescript, Postgresql, Next, Tailwind, Docker, Gcp],
    webProps: {
      logoUrl: '/icons/warecloud.ico',
      webUrl: 'https://web.warecloud.net/',
    },
    githubUrl: 'https://github.com/orgs/SIUUU-CORP/repositories',
  },
  {
    title: 'Worldie',
    imageUrl: 'v1703595536/worldie_iwnrvs.png',
    description:
      'Social media platforms, such as Twitter, are used by travelers to share suggestions and reviews about tourist destinations. Additionally, agents\
      can manage their businesses on Worldie. Developed using Unified Process Model.',
    techStacks: [Nest, Typescript, Postgresql, Next, Tailwind, Cloudinary, Docker, Gcp],
    webProps: {
      logoUrl: '/icons/worldie.png',
      webUrl: 'https://worldie-atw.vercel.app/',
    },
    githubUrl: 'https://github.com/orgs/WorldieATW/repositories',
  },
  {
    title: 'Atmos Game',
    imageUrl: 'v1703602048/atmos_mushl9.png',
    description:
      'Atmos aims to create programs that can help users find applications & games they like, as well as help developers publish their applications.',
    techStacks: [
      Spring,
      Java,
      Postgresql,
      Next,
      Typescript,
      Tailwind,
      Docker,
      Gcp,
      Prometheus,
      Grafana,
    ],
    githubUrl: 'https://github.com/AtmosGame',
  },
  {
    title: 'Socket Programming',
    imageUrl: 'v1703529675/socket-programming_bqzibr.png',
    description:
      'A simple API with server socket written from scratch in Golang.',
    techStacks: [Golang],
    githubUrl: 'https://github.com/rifqifarelmuhammad/socket-programming',
  },
]

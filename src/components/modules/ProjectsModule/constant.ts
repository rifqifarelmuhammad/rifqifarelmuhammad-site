import {
  Cloudinary,
  Django,
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
import { ProjectCardProps } from '../types/projectsModule'

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'CirrhoCheck',
    imageUrl: 'v1717523671/CirrhoCheck_rlgxck.png',
    description:
      'CirrhoCheck is a Cirrhosis mortality risk calculator that will be used by Dr. Cipto Mangunkusumo Hospital.',
    techStacks: [Django, Postgresql, Next, Typescript, Tailwind, Gcp],
    website: 'https://cirrhocheck.com/',
    git: 'https://gitlab.cs.ui.ac.id/cirrhocheck',
    documentation:
      'https://drive.google.com/drive/folders/1-BFkoyVMxArsBdN6lKolYap8KgK67dVu?usp=sharing',
  },
  {
    title: 'Personal Website',
    imageUrl: 'v1717522882/portfolio-website_k5t0vv.png',
    description:
      'The place where I put my information, such as skills, projects, and contacts.',
    techStacks: [Next, Typescript, Tailwind, Cloudinary],
    website: 'https://rifqifarelmuhammad.com/',
    git: 'https://github.com/rifqifarelmuhammad/rifqifarelmuhammad-site',
  },
  {
    title: 'Warecloud',
    imageUrl: 'v1703596001/warecloud_xhravc.png',
    description:
      'Warecloud is an application that allows warehouses to integrate their branches to create a more effective and efficient supply chain. Customers can also order items online directly through Warecloud.',
    techStacks: [Nest, Typescript, Postgresql, Next, Tailwind, Docker, Gcp],
    git: 'https://github.com/orgs/SIUUU-CORP/repositories',
  },
  {
    title: 'Worldie',
    imageUrl: 'v1703595536/worldie_iwnrvs.png',
    description:
      'Warecloud is an application that allows warehouses to integrate their branches to create a more effective and efficient supply chain. Customers can also order items online directly through Warecloud.',
    techStacks: [
      Nest,
      Typescript,
      Postgresql,
      Next,
      Tailwind,
      Cloudinary,
      Docker,
      Gcp,
    ],
    git: 'https://github.com/orgs/WorldieATW/repositories',
    documentation:
      'https://drive.google.com/file/d/1X_NoKMirfodSSb-vEW_7pr9D3imUb3d4/view',
  },
  {
    title: 'Atmos Game',
    imageUrl: 'v1703602048/atmos_mushl9.png',
    description:
      'Atmos is a game store application, aimed to help users find applications & games they like, as well as help developers publish their applications.',
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
    git: 'https://github.com/AtmosGame',
    documentation:
      'https://drive.google.com/drive/folders/12d6vGoOtxPrllFjmnwksfc5hyFfAA_aC?usp=sharing',
  },
  {
    title: 'Socket Programming',
    imageUrl: 'v1703529675/socket-programming_bqzibr.png',
    description:
      'A simple API with server socket written from scratch in Golang.',
    techStacks: [Golang],
    git: 'https://github.com/rifqifarelmuhammad/socket-programming',
  },
]

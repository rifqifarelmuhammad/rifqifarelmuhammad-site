import { ProjectCardProps } from '../types/projectsModule'

export const PROJECTS: ProjectCardProps[] = [
  {
    // Showcase only: CirrhoCheck runs in a hospital, so it carries no site,
    // repository or documentation link.
    title: 'CirrhoCheck',
    imageUrl: 'v1717523671/CirrhoCheck_rlgxck.png',
    imageAlt: 'CirrhoCheck clinical decision-support system preview',
    role: 'Engineering Lead',
    description:
      'Clinical decision-support system for cirrhosis mortality-risk assessment, deployed at Cipto Mangunkusumo General Hospital (RSCM). Helped build an automated workflow based on a published clinical scoring formula developed by an RSCM physician.',
    techStacks: [
      'Django',
      'PostgreSQL',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Google Cloud Platform',
    ],
  },
  {
    title: 'Atmos Game',
    imageUrl: 'v1703602048/atmos_mushl9.png',
    imageAlt: 'Atmos Game store platform preview',
    description:
      'A full-stack game store platform that helps users discover games and applications while allowing developers to publish their products.',
    techStacks: [
      'Spring',
      'Java',
      'PostgreSQL',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Docker',
      'Google Cloud Platform',
      'Prometheus',
      'Grafana',
    ],
    git: 'https://github.com/AtmosGame',
    documentation:
      'https://drive.google.com/drive/folders/12d6vGoOtxPrllFjmnwksfc5hyFfAA_aC?usp=sharing',
  },
  {
    title: 'Warecloud',
    imageUrl: 'v1703596001/warecloud_xhravc.png',
    imageAlt: 'Warecloud warehouse and commerce platform preview',
    description:
      'A full-stack warehouse and commerce platform designed to integrate multiple warehouse branches and support direct customer ordering.',
    techStacks: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Next.js',
      'Tailwind CSS',
      'Docker',
      'Google Cloud Platform',
    ],
    git: 'https://github.com/orgs/SIUUU-CORP/repositories',
  },
  {
    title: 'Worldie',
    imageUrl: 'v1703595536/worldie_iwnrvs.png',
    imageAlt: 'Worldie travel social platform preview',
    description:
      'A social media platform for travelers to share destination experiences and tips, connect with other travelers, and access online booking features.',
    techStacks: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Next.js',
      'Tailwind CSS',
      'Cloudinary',
      'Docker',
      'Google Cloud Platform',
    ],
    git: 'https://github.com/orgs/WorldieATW/repositories',
    documentation:
      'https://drive.google.com/file/d/1X_NoKMirfodSSb-vEW_7pr9D3imUb3d4/view',
  },
]

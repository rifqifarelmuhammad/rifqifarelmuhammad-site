import { PROJECTS } from '../../ProjectsModule/constant'
import { SelectedProjectCardProps } from '../../types/homeModule'

// The projects page owns the canonical image and URLs, so reuse them here
// instead of keeping a second copy that can silently go stale.
const projectOf = (title: string) =>
  PROJECTS.find((candidate) => candidate.title === title)

const imageOf = (title: string) => projectOf(title)?.imageUrl ?? ''

const linksOf = (title: string) => {
  const project = projectOf(title)

  return {
    website: project?.website,
    git: project?.git,
    documentation: project?.documentation,
  }
}

export const SELECTED_PROJECTS: SelectedProjectCardProps[] = [
  {
    // CirrhoCheck deliberately exposes no links: it is a hospital system and
    // its site, repository, and docs are not ours to hand out.
    imageUrl: imageOf('CirrhoCheck'),
    title: 'CirrhoCheck',
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
    imageUrl: imageOf('Atmos Game'),
    ...linksOf('Atmos Game'),
    title: 'Atmos Game',
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
  },
  {
    imageUrl: imageOf('Warecloud'),
    ...linksOf('Warecloud'),
    title: 'Warecloud',
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
  },
]

import {
  Aws,
  Docker,
  Gcp,
  Golang,
  Grafana,
  Java,
  Kubernetes,
  Nest,
  Next,
  Postgresql,
  Python,
  React,
  Sentry,
  Spring,
  Typescript,
} from '@icons'
import {
  SiApachekafka,
  SiArgo,
  SiBitbucket,
  SiDatadog,
  SiMongodb,
  SiRedis,
  SiVuedotjs,
} from 'react-icons/si'
import { TechStackCategoryProps } from '../../types/homeModule'

// Ordered by professional relevance rather than alphabetically.
export const TECH_STACK: TechStackCategoryProps[] = [
  {
    title: 'Languages',
    technologies: [
      { name: 'Go', Icon: Golang },
      { name: 'Java', Icon: Java },
      { name: 'TypeScript', Icon: Typescript },
      { name: 'Python', Icon: Python },
    ],
  },
  {
    title: 'Backend & Data',
    technologies: [
      { name: 'Gin' },
      { name: 'Spring Boot', Icon: Spring },
      { name: 'NestJS', Icon: Nest },
      { name: 'PostgreSQL', Icon: Postgresql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Redis', Icon: SiRedis },
      { name: 'gRPC' },
      { name: 'Kafka', Icon: SiApachekafka },
    ],
  },
  {
    title: 'Frontend & Mobile',
    technologies: [
      { name: 'Next.js', Icon: Next },
      { name: 'React', Icon: React },
      { name: 'Vue.js', Icon: SiVuedotjs },
      { name: 'React Native', Icon: React },
    ],
  },
  {
    title: 'Cloud, DevOps & Observability',
    technologies: [
      { name: 'Docker', Icon: Docker },
      { name: 'Kubernetes', Icon: Kubernetes },
      { name: 'AWS', Icon: Aws },
      { name: 'Google Cloud Platform', Icon: Gcp },
      { name: 'Argo CD', Icon: SiArgo },
      { name: 'Bitbucket Pipelines', Icon: SiBitbucket },
      { name: 'Datadog', Icon: SiDatadog },
      { name: 'Grafana', Icon: Grafana },
      { name: 'Sentry', Icon: Sentry },
    ],
  },
]

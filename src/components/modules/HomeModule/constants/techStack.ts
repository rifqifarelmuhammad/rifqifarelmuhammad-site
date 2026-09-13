import {
  Django,
  Docker,
  Firebase,
  Gcp,
  Golang,
  Grafana,
  Java,
  Javascript,
  Kubernetes,
  Mysql,
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
  SiAlibabacloud,
  SiAmazonaws,
  SiApachekafka,
  SiBitbucket,
  SiDatadog,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiMicrosoftazure,
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
      { name: 'JavaScript', Icon: Javascript },
      { name: 'Python', Icon: Python },
    ],
  },
  {
    title: 'Backend & Data',
    technologies: [
      { name: 'Django', Icon: Django },
      { name: 'Spring Boot', Icon: Spring },
      { name: 'NestJS', Icon: Nest },
      { name: 'PostgreSQL', Icon: Postgresql },
      { name: 'MySQL', Icon: Mysql },
      { name: 'MongoDB', Icon: SiMongodb },
      // Firestore has no mark of its own; it ships under the Firebase family.
      { name: 'Firestore', Icon: Firebase },
      { name: 'Redis', Icon: SiRedis },
      { name: 'REST APIs' },
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
      // The local AWS mark is near-black and disappears against the page.
      { name: 'AWS', Icon: SiAmazonaws },
      { name: 'Google Cloud Platform', Icon: Gcp },
      { name: 'Alibaba Cloud', Icon: SiAlibabacloud },
      { name: 'Azure', Icon: SiMicrosoftazure },
      { name: 'Firebase', Icon: Firebase },
      { name: 'Bitbucket Pipelines', Icon: SiBitbucket },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'GitLab CI/CD', Icon: SiGitlab },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Datadog', Icon: SiDatadog },
      { name: 'Grafana', Icon: Grafana },
      { name: 'Sentry', Icon: Sentry },
    ],
  },
]

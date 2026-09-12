import { ExperienceCardProps } from '../../types/homeModule'

export const EXPERIENCES: ExperienceCardProps[] = [
  {
    company: 'Mekari',
    role: 'Software Engineer 1',
    startLabel: 'June 2025',
    startDateTime: '2025-06',
    endLabel: 'Present',
    highlights: [
      'Building and maintaining production features across 25+ microservices powering Mekari’s low-code and no-code platform, serving hundreds of businesses and handling 500K+ requests daily.',
      'Co-developed an AI-assisted end-to-end development workflow spanning planning, implementation, and testing, reducing feature delivery time by approximately 5x.',
      'Built internal deployment tooling that unified multi-tenant and single-tenant release workflows, reducing end-to-end deployment time by approximately 60%.',
      'Implemented distributed tracing with Datadog across 25+ microservices and improved CI workflows, including a 50% reduction in unit testing pipeline execution time.',
    ],
  },
  {
    company: 'Bosnet Distribution Indonesia',
    role: 'Software Developer Intern',
    startLabel: 'January 2025',
    startDateTime: '2025-01',
    endLabel: 'June 2025',
    endDateTime: '2025-06',
    highlights: [
      'Modernized 6 critical modules by migrating functionality from a legacy desktop application to a responsive web interface while maintaining full functional parity.',
      'Developed and enhanced 10+ reusable UI components within the company’s internal design system, improving consistency and frontend development efficiency.',
    ],
  },
  {
    company: 'Gradient',
    role: 'Software Engineer Intern',
    startLabel: 'January 2024',
    startDateTime: '2024-01',
    endLabel: 'January 2025',
    endDateTime: '2025-01',
    highlights: [
      'Built an advanced search system with Typesense, indexing tens of thousands of documents and serving an average of 1K+ daily users.',
      'Developed Gradient’s mobile application, which has since surpassed 50K downloads across Google Play and the App Store.',
      'Built a semi-automated content generation pipeline using OpenAI APIs for 5K+ videos and implemented API rate limiting for a platform now serving 25K+ monthly active users.',
    ],
  },
]

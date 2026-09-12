import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'
import { IconType } from 'react-icons'

interface TechStackItem {
  name: string
  // Absent when neither the local icon set nor react-icons carries the logo.
  Icon?: FC<IconProps> | IconType
}

interface TechStackCategoryProps {
  title: string
  technologies: TechStackItem[]
}

interface AboutCardProps {
  number: number
  content: string
}

interface SpecialtyCardProps {
  Icon: IconType
  content: string
}

interface EducationCardProps {
  institution: string
  affiliation?: string
  degree: string
  startLabel: string
  startDateTime: string
  endLabel: string
  endDateTime: string
  badges: string[]
}

interface PublicationCardProps {
  authorRole: string
  title: string
  venue: string
  doi: string
  url: string
  isPrimary?: boolean
}

interface SelectedProjectCardProps {
  title: string
  imageUrl: string
  imageAlt: string
  description: string
  role?: string
  techStacks: string[]
  website?: string
  git?: string
  documentation?: string
  isFeatured?: boolean
}

interface ExperienceCardProps {
  company: string
  role: string
  startLabel: string
  startDateTime: string
  endLabel: string
  // Omitted for the ongoing role, which also marks it as current.
  endDateTime?: string
  highlights: string[]
}

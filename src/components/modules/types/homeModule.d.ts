import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'
import { IconType } from 'react-icons'

interface TechStackProps {
  title: string
  logos: FC<IconProps>[]
}

interface AboutCardProps {
  number: number
  content: string
}

interface SpecialtyCardProps {
  Icon: IconType
  content: string
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

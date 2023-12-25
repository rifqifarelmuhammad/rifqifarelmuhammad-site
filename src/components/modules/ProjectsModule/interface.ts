import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'

export interface ProjectCardProps {
  title: string
  image: string
  description: string
  techStacks: FC<IconProps>[]
  webUrl: string
  githubUrl: string
}

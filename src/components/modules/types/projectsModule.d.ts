import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'
import { IconType } from 'react-icons'

interface ProjectCardProps {
  title: string
  imageUrl: string
  description: string
  techStacks: (FC<IconProps> | IconType)[]
  webProps?: {
    logoUrl: string
    webUrl: string
  }
  githubUrl: string
}

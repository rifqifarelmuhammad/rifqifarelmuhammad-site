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

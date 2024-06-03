import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'
import { IconType } from 'react-icons'

interface LogoProps {
  Logo: FC<IconProps>
  LogoColorless: FC<IconProps>
}

interface TechStackProps {
  title: string
  logos: LogoProps[]
}

interface AboutCardProps {
  number: number
  content: string
}

interface SpecialtyCardProps {
  Icon: IconType
  content: string
}
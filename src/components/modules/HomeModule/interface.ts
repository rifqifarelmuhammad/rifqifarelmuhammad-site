import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'

export interface LogoProps {
  Logo: FC<IconProps>
  LogoColorless: FC<IconProps>
}

export interface TechStackProps {
  title: string
  LOGOS: LogoProps[]
}

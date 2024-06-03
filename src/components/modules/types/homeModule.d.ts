import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'

interface LogoProps {
  Logo: FC<IconProps>
  LogoColorless: FC<IconProps>
}

interface TechStackProps {
  title: string
  logos: LogoProps[]
}

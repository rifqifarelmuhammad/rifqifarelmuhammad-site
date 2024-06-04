import { FC } from 'react'
import { IconProps } from 'src/components/icons/interface'

export const LogoAnimation = ({
  Logo,
}: {
  Logo: FC<IconProps>
}): JSX.Element => (
  <div className="w-[17.5%] md:w-[12.5%] lg:w-[10%] relative group">
    <Logo
      size="w-full"
      className="absolute opacity-100 lg:opacity-0 lg:group-hover:opacity-100 duration-300 transition-all ease-in-out"
    />
    <Logo
      size="w-full"
      className="opacity-0 lg:opacity-100 lg:group-hover:opacity-0 duration-300 transition-all ease-in-out"
      colorless
    />
  </div>
)

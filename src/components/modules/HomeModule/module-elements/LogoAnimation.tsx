import { LogoProps } from '../interface'

export const LogoAnimation: React.FC<LogoProps> = ({ Logo, LogoColorless }) => (
  <div className="w-[15%] relative group">
    <Logo
      size="w-full"
      className="absolute opacity-100 lg:opacity-0 lg:group-hover:opacity-100 duration-300 transition-all ease-in-out"
    />
    <LogoColorless
      size="w-full"
      className="opacity-0 lg:opacity-100 lg:group-hover:opacity-0 duration-300 transition-all ease-in-out"
    />
  </div>
)

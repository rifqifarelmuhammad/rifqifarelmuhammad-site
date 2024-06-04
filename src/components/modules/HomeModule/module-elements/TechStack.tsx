import { LogoAnimation } from '.'
import { TechStackProps } from '../../types/homeModule'

export const TechStack = ({ title, logos }: TechStackProps): JSX.Element => (
  <div className='flex flex-col gap-5 lg:gap-7'>
    <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-5 lg:gap-7 xl:gap-8">
      {logos.map((Logo, idx) => (
        <LogoAnimation
          key={`logo-${idx + 1}`}
          Logo={Logo}
        />
      ))}
    </div>
  </div>
)

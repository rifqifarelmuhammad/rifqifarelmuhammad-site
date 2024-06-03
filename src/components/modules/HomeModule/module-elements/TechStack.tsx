import { LogoAnimation } from '.'
import { TechStackProps } from '../../types/homeModule'

export const TechStack: React.FC<TechStackProps> = ({ title, logos }) => (
  <>
    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
      {logos.map(({ Logo, LogoColorless }, idx) => (
        <LogoAnimation
          key={`logo-${idx + 1}`}
          Logo={Logo}
          LogoColorless={LogoColorless}
        />
      ))}
    </div>
  </>
)

import { LogoAnimation } from '.'
import { TechStackProps } from '../interface'

export const TechStack: React.FC<TechStackProps> = ({ title, LOGOS }) => (
  <>
    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
      {LOGOS.map(({ Logo, LogoColorless }) => (
        <LogoAnimation Logo={Logo} LogoColorless={LogoColorless} />
      ))}
    </div>
  </>
)

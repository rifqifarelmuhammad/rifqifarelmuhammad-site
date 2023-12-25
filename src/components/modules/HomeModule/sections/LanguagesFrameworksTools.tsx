import { FRAMEWORKS, LANGUAGES, TOOLS } from '../constant'
import { LogoAnimation } from '../module-elements'

export const LanguagesFrameworksTools = () => (
  <div className="flex flex-col gap-8">
    <h2 className="text-6xl font-bold text-white">
      {`Languages-Frameworks-Tools `}
      <span>⚒️</span>
    </h2>

    <h3 className="text-4xl font-bold text-white text-center">Languages</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {LANGUAGES.map(({ Logo, LogoColorless }) => (
        <LogoAnimation Logo={Logo} LogoColorless={LogoColorless} />
      ))}
    </div>

    <h3 className="text-4xl font-bold text-white text-center">Frameworks</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {FRAMEWORKS.map(({ Logo, LogoColorless }) => (
        <LogoAnimation Logo={Logo} LogoColorless={LogoColorless} />
      ))}
    </div>

    <h3 className="text-4xl font-bold text-white text-center">Tools</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {TOOLS.map(({ Logo, LogoColorless }) => (
        <LogoAnimation Logo={Logo} LogoColorless={LogoColorless} />
      ))}
    </div>
  </div>
)

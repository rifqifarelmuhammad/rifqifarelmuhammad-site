import { TECH_STACK } from '../constant'
import { TechStack } from '../module-elements'

export const LanguagesFrameworksTools = (): JSX.Element => (
  <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:gap-10 lg:gap-12 xl:gap-14 text-[#ffffff]/[0.75]">
    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
      {`Tech Stack `}
      <span>⚒️</span>
    </h2>

    {TECH_STACK.map(({ title, logos }) => (
      <TechStack key={title} title={title} logos={logos} />
    ))}
  </div>
)

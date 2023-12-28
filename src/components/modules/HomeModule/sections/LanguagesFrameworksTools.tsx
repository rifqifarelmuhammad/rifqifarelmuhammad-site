import { TECH_STACK } from '../constant'
import { TechStack } from '../module-elements'

export const LanguagesFrameworksTools = () => (
  <div className="flex flex-col gap-8 text-[#ffffff]/[0.75]">
    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
      {`Tech Stack `}
      <span>⚒️</span>
    </h2>

    {TECH_STACK.map(({ title, LOGOS }) => (
      <TechStack title={title} LOGOS={LOGOS} />
    ))}
  </div>
)

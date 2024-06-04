import { TECH_STACK } from '../constants/techStack'
import { TechStack } from '../module-elements'

export const LanguagesFrameworksTools = (): JSX.Element => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 justify-start px-6 md:px-8 lg:px-14">
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
      Tech Stack ⚒️
    </h2>

    {TECH_STACK.map(({ title, logos }) => (
      <TechStack key={title} title={title} logos={logos} />
    ))}
  </section>
)

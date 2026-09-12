import { TECH_STACK } from '../constants/techStack'
import { TechStackCategory } from '../module-elements'

export const TechStackSection = (): JSX.Element => (
  <section
    id="tech-stack"
    className="scroll-mt-24 max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14"
  >
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
      Tech Stack
    </h2>

    <div className="flex flex-col gap-6 md:gap-7">
      {TECH_STACK.map(({ title, technologies }) => (
        <TechStackCategory
          key={title}
          title={title}
          technologies={technologies}
        />
      ))}
    </div>
  </section>
)

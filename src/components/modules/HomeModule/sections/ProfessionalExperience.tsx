import { EXPERIENCES } from '../constants/experience'
import { ExperienceCard } from '../module-elements'

export const ProfessionalExperience = (): JSX.Element => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14">
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
      Professional Experience
    </h2>

    <div className="flex flex-col gap-8 md:gap-10 max-w-[900px]">
      {EXPERIENCES.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  </section>
)

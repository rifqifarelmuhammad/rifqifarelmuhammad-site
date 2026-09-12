import { EDUCATIONS } from '../constants/education'
import { EducationCard } from '../module-elements'

export const Education = (): JSX.Element => (
  <section
    id="education"
    className="scroll-mt-24 max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14"
  >
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">Education</h2>

    <div className="grid md:grid-cols-2 gap-6 md:gap-7">
      {EDUCATIONS.map((education) => (
        <EducationCard key={education.institution} {...education} />
      ))}
    </div>
  </section>
)

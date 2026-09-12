import { ABOUTS, SPECIALTIES } from '../constants/aboutAndSpecialty'
import { AboutCard } from '../module-elements/AboutCard'
import { SpecialtyCard } from '../module-elements/SpecialtyCard'

export const AboutAndSpecialty = (): JSX.Element => (
  <section
    id="about"
    className="scroll-mt-24 max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-20 px-6 md:px-8 lg:px-14"
  >
    <div className="flex flex-col gap-6 md:gap-7 w-full lg:w-[60%] xl:w-[65%]">
      <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
        About Rifqi
      </h2>

      <div className="flex flex-col gap-5 md:gap-6">
        {ABOUTS.map(({ number, content }) => (
          <AboutCard
            key={`about-${number}`}
            number={number}
            content={content}
          />
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-6 md:gap-7 w-full lg:w-[37.5%] xl:w-[32.5%]">
      <h2 className="font-bold text-[#FFDE24] text-4xl">Specialty</h2>

      <div className="grid md:grid-cols-2 lg:flex flex-col gap-5 md:gap-6 w-full">
        {SPECIALTIES.map(({ Icon, content }) => (
          <SpecialtyCard key={content} Icon={Icon} content={content} />
        ))}
      </div>
    </div>
  </section>
)

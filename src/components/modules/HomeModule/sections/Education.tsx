import { EDUCATION } from '../constants/education'

const {
  institution,
  degree,
  startLabel,
  startDateTime,
  endLabel,
  endDateTime,
  gpa,
  distinction,
} = EDUCATION

export const Education = (): JSX.Element => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14">
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">Education</h2>

    <article className="flex flex-col gap-3 md:gap-4 max-w-[900px] rounded-lg border border-white/20 p-5 md:p-6 bg-gradient-to-b from-[#210A0A] to-[#6B1D1D] shadow-lg">
      <div className="flex flex-col gap-1.5">
        <h3 className="font-bold text-white text-xl md:text-2xl">
          {institution}
        </h3>

        <p className="font-medium text-[#FFDE24] text-base md:text-lg">
          {degree}
        </p>

        <p className="text-white/60 text-sm md:text-base">
          <time dateTime={startDateTime}>{startLabel}</time>
          {' – '}
          <time dateTime={endDateTime}>{endLabel}</time>
        </p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {[gpa, distinction].map((badge) => (
          <li
            key={badge}
            className="rounded-full border border-white/25 px-2.5 py-1 font-medium text-white/80 text-xs md:text-sm"
          >
            {badge}
          </li>
        ))}
      </ul>
    </article>
  </section>
)

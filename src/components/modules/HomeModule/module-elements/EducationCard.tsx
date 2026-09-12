import { EducationCardProps } from '../../types/homeModule'

export const EducationCard = ({
  institution,
  affiliation,
  degree,
  startLabel,
  startDateTime,
  endLabel,
  endDateTime,
  badges,
}: EducationCardProps): JSX.Element => (
  <article className="flex flex-col h-full gap-3 md:gap-4 rounded-lg border border-white/20 p-5 md:p-6 bg-gradient-to-b from-[#210A0A] to-[#6B1D1D] shadow-lg">
    <div className="flex flex-col gap-1.5">
      <h3 className="font-bold text-white text-xl md:text-2xl">
        {institution}
      </h3>

      {affiliation && (
        <p className="text-white/60 text-sm md:text-base">{affiliation}</p>
      )}

      <p className="font-medium text-[#FFDE24] text-base md:text-lg">
        {degree}
      </p>

      <p className="text-white/60 text-sm md:text-base">
        <time dateTime={startDateTime}>{startLabel}</time>
        {' – '}
        <time dateTime={endDateTime}>{endLabel}</time>
      </p>
    </div>

    <ul className="mt-auto flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li
          key={badge}
          className="rounded-full border border-white/25 px-2.5 py-1 font-medium text-white/80 text-xs md:text-sm"
        >
          {badge}
        </li>
      ))}
    </ul>
  </article>
)

import { ExperienceCardProps } from '../../types/homeModule'

export const ExperienceCard = ({
  company,
  role,
  startLabel,
  startDateTime,
  endLabel,
  endDateTime,
  highlights,
}: ExperienceCardProps): JSX.Element => (
  <article className="flex flex-col gap-3 md:gap-4 border-l-2 border-[#FFDE24]/40 pl-5 md:pl-6">
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <h3 className="font-bold text-white text-xl md:text-2xl">{company}</h3>

        {!endDateTime && (
          <span className="rounded-full border border-[#FFDE24]/60 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-[#FFDE24] text-xs">
            Current
          </span>
        )}
      </div>

      <p className="font-medium text-[#FFDE24] text-base md:text-lg">{role}</p>

      <p className="text-white/60 text-sm">
        <time dateTime={startDateTime}>{startLabel}</time>
        {' – '}
        {endDateTime ? (
          <time dateTime={endDateTime}>{endLabel}</time>
        ) : (
          endLabel
        )}
      </p>
    </div>

    <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[#FFDE24]">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="font-medium text-white/80 text-sm md:text-base"
        >
          {highlight}
        </li>
      ))}
    </ul>
  </article>
)

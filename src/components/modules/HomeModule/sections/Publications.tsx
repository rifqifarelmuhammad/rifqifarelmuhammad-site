import { PUBLICATIONS } from '../constants/publications'
import { PublicationCard } from '../module-elements'

export const Publications = (): JSX.Element => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14">
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
      Publications
    </h2>

    <div className="grid md:grid-cols-2 gap-6 md:gap-7">
      {PUBLICATIONS.map((publication, idx) => (
        <PublicationCard
          key={publication.doi}
          {...publication}
          isPrimary={idx === 0}
        />
      ))}
    </div>
  </section>
)

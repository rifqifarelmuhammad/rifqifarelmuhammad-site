import Link from 'next/link'
import { PublicationCardProps } from '../../types/homeModule'

export const PublicationCard = ({
  authorRole,
  title,
  venue,
  doi,
  url,
  isPrimary,
}: PublicationCardProps): JSX.Element => (
  <article
    className={`flex flex-col h-full gap-3 md:gap-4 rounded-lg p-5 md:p-6 bg-gradient-to-b from-[#210A0A] to-[#6B1D1D] shadow-lg ${
      isPrimary ? 'border-2 border-[#FFDE24]/70' : 'border border-white/20'
    }`}
  >
    <span
      className={`w-fit rounded-full px-2.5 py-0.5 font-semibold uppercase tracking-wider text-xs ${
        isPrimary
          ? 'bg-[#FFDE24] text-[#100E0E]'
          : 'border border-[#FFDE24]/60 text-[#FFDE24]'
      }`}
    >
      {authorRole}
    </span>

    <h3 className="font-semibold text-white text-lg md:text-xl">{title}</h3>

    <p className="text-white/80 text-sm md:text-base">{venue}</p>

    <p className="text-white/60 text-sm md:text-base break-words">DOI: {doi}</p>

    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} publication, opens in a new tab`}
      className="mt-auto w-fit rounded-lg px-6 py-2 border border-[#FFDE24]/60 font-semibold text-[#FFDE24] text-sm md:text-base hover:bg-[#FFDE24]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]"
    >
      View Publication
    </Link>
  </article>
)

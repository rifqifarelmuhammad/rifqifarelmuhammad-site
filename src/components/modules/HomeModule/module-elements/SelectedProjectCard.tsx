import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@utils'
import { SelectedProjectCardProps } from '../../types/homeModule'

const ACTION_FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]'

export const SelectedProjectCard = ({
  title,
  imageUrl,
  imageAlt,
  description,
  role,
  techStacks,
  website,
  git,
  documentation,
  isFeatured,
}: SelectedProjectCardProps): JSX.Element => (
  <article
    className={`flex flex-col w-full bg-gradient-to-b from-[#210A0A] to-[#6B1D1D] rounded-lg shadow-lg overflow-hidden ${
      isFeatured ? 'lg:flex-row' : ''
    }`}
  >
    <div
      className={`relative w-full aspect-[500/225] ${
        isFeatured ? 'lg:w-[45%] lg:aspect-auto lg:min-h-[300px]' : ''
      }`}
    >
      <Image
        alt={imageAlt}
        src={getImage(imageUrl)}
        fill
        sizes="none"
        className="object-cover"
      />
    </div>

    <div className="flex flex-col flex-1 gap-4 md:gap-5 p-5 md:p-6 lg:p-7">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-semibold text-white text-xl md:text-2xl">
            {title}
          </h3>

          {isFeatured && (
            <span className="rounded-full border border-[#FFDE24]/60 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-[#FFDE24] text-xs">
              Featured
            </span>
          )}
        </div>

        {role && (
          <p className="font-semibold text-[#FFDE24] text-sm md:text-base">
            {role}
          </p>
        )}

        <p className="text-white/80 text-sm md:text-base">{description}</p>
      </div>

      <ul
        aria-label={`Technologies used in ${title}`}
        className="flex flex-wrap gap-2"
      >
        {techStacks.map((techStack) => (
          <li
            key={techStack}
            className="rounded-full border border-white/25 px-2.5 py-1 text-white/80 text-xs md:text-sm"
          >
            {techStack}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-3 md:gap-4">
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live site, opens in a new tab`}
            className={`rounded-lg px-6 py-2 bg-gradient-to-b from-[#FFDE24] to-[#A68F0F] font-bold text-sm md:text-base ${ACTION_FOCUS}`}
          >
            Live Site
          </Link>
        )}

        {git && (
          <Link
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code, opens in a new tab`}
            className={`rounded-lg px-6 py-2 border border-[#FFDE24]/60 font-semibold text-[#FFDE24] text-sm md:text-base hover:bg-[#FFDE24]/10 ${ACTION_FOCUS}`}
          >
            Source Code
          </Link>
        )}

        {documentation && (
          <Link
            href={documentation}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} documentation, opens in a new tab`}
            className={`rounded-lg px-1 py-2 font-semibold text-white underline text-sm md:text-base hover:text-[#FFDE24] ${ACTION_FOCUS}`}
          >
            Documentation
          </Link>
        )}
      </div>
    </div>
  </article>
)

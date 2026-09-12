import Link from 'next/link'
import { TfiEmail } from 'react-icons/tfi'
import { EMAIL, SOCIAL_LINKS } from './constant'

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]'

export const Footer = (): JSX.Element => (
  <footer
    id="contacts"
    className="scroll-mt-24 flex justify-center px-6 md:px-8 lg:px-14 pb-8 md:pb-10"
  >
    <div className="max-w-[1440px] w-full flex flex-col gap-8 md:gap-10">
      <section className="flex flex-col gap-4 md:gap-5 max-w-[640px]">
        <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
          Let&rsquo;s Connect
        </h2>

        <p className="text-white/80 text-sm md:text-base">
          Interested in working together or discussing software engineering
          opportunities? Feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          <Link
            href={`mailto:${EMAIL}`}
            className={`flex items-center gap-2 rounded-lg px-6 py-2.5 bg-gradient-to-b from-[#FFDE24] to-[#A68F0F] font-bold text-sm md:text-base ${FOCUS}`}
          >
            <TfiEmail aria-hidden className="w-4 h-4 md:w-5 md:h-5" />
            Email Me
          </Link>

          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Rifqi Farel Muhammad's ${label} profile in a new tab`}
              className={`flex items-center gap-2 rounded-lg px-6 py-2.5 border border-[#FFDE24]/60 font-semibold text-[#FFDE24] text-sm md:text-base hover:bg-[#FFDE24]/10 ${FOCUS}`}
            >
              <Icon aria-hidden className="w-4 h-4 md:w-5 md:h-5" />
              {label}
            </Link>
          ))}
        </div>

        <p className="text-white/60 text-sm md:text-base break-words">
          {EMAIL}
        </p>
      </section>

      <p className="border-t border-white/10 pt-5 text-white/60 text-sm">
        &copy; 2026 Rifqi Farel Muhammad
      </p>
    </div>
  </footer>
)

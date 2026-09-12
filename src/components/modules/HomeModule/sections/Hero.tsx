import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@utils'

export const Hero = (): JSX.Element => (
  <section className="bg-gradient-to-t md:bg-gradient-to-r from-[#100E0E] via-[#131016] to-[#862C19]">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-[1440px] mx-auto gap-6 md:gap-10 lg:gap-16 px-6 md:px-8 lg:px-14 py-10 md:py-14 lg:py-16">
      <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-5 lg:gap-6">
        <p className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-[#FFDE24]">
          Software Engineer @ Mekari
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Hi, I&rsquo;m{' '}
          <span className="text-[#FFDE24]">Rifqi Farel Muhammad</span>.
        </h1>

        <p className="text-base md:text-lg text-white">
          Backend-leaning full-stack engineer building production systems with
          Go, microservices, and modern web technologies.
        </p>

        <p className="text-sm md:text-base text-white/70">
          I work across backend, frontend, mobile, and developer infrastructure,
          with a focus on scalable systems, reliability, and developer
          productivity.
        </p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-1">
          <Link
            href="/Rifqi_Farel_Muhammad_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Rifqi Farel Muhammad's resume as a PDF, opens in a new tab"
            className="rounded-lg px-8 py-2.5 bg-gradient-to-b from-[#FFDE24] to-[#A68F0F] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]"
          >
            View Resume
          </Link>

          <Link
            href="/projects"
            className="rounded-lg px-8 py-2.5 border border-[#FFDE24]/60 font-semibold text-[#FFDE24] hover:bg-[#FFDE24]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]"
          >
            View Projects
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <div className="relative aspect-[526.37/372.96]">
          <Image
            src={getImage('v1717443757/portfolio-hero_ykbz9u.png')}
            priority
            fill
            alt="Rifqi Farel Muhammad portfolio illustration"
            sizes="none"
          />
        </div>
      </div>
    </div>
  </section>
)

import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@utils'

export const Hero = (): JSX.Element => (
  <section className="bg-gradient-to-t md:bg-gradient-to-r from-[#100E0E] via-[#131016] to-[#862C19]">
    <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-[1440px] mx-auto gap-6 md:gap-10 lg:gap-16 px-6 md:px-8 lg:px-14 py-10 md:py-14 lg:py-16">
      <div className="w-full md:w-[50%] flex flex-col gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        <h3 className="text-4xl md:text-5xl font-bold text-[#FFDE24]">
          Hey There! 👋
        </h3>

        <h1 className="text-white text-justify">
          I&rsquo;m{' '}
          <span className="font-bold text-[#FFDE24]">Rifqi Farel Muhammad</span>
          , a Computer Science student at University of Indonesia. I have a
          strong passion for software engineering, particularly in web
          development. I always push myself to improve my skills and learn new
          technologies.
        </h1>

        <Link
          href="#contacts"
          className="w-fit rounded-lg px-8 py-2 bg-gradient-to-b from-[#FFDE24] to-[#A68F0F] font-bold"
        >
          Contact Me
        </Link>
      </div>

      <div className="w-full md:w-[50%]">
        <div className="relative aspect-[526.37/372.96]">
          <Image
            src={getImage('v1717443757/portfolio-hero_ykbz9u.png')}
            priority
            fill
            alt="hero"
          />
        </div>
      </div>
    </div>
  </section>
)

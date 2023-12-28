import { HeyThere, LanguagesFrameworksTools } from './sections'

export const HomeModule = () => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-16 md:gap-20 lg:gap-24 px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-14 lg:py-20">
    <HeyThere />
    <LanguagesFrameworksTools />
  </section>
)

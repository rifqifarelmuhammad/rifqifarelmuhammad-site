import { Layout, PageAnimation } from '@elements'
import { AboutAndSpecialty, Hero, LanguagesFrameworksTools } from './sections'

export const HomeModule = (): JSX.Element => (
  <PageAnimation>
    <Layout className="!py-0 !px-0 !max-w-full mb-10 md:mb-16">
      <Hero />
      <AboutAndSpecialty />
      <LanguagesFrameworksTools />
    </Layout>
  </PageAnimation>
)

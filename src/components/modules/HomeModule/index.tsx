import { Layout, PageAnimation } from '@elements'
import { Hero, LanguagesFrameworksTools } from './sections'

export const HomeModule = (): JSX.Element => (
  <PageAnimation>
    <Layout className='!py-0 !px-0 !max-w-full'>
      <Hero/>
      <LanguagesFrameworksTools />
    </Layout>
  </PageAnimation>
)

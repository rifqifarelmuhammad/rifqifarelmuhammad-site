import { useEffect } from 'react'
import { Layout, PageAnimation } from '@elements'
import {
  AboutAndSpecialty,
  Education,
  Hero,
  LanguagesFrameworksTools,
  ProfessionalExperience,
  Publications,
  SelectedProjects,
} from './sections'

export const HomeModule = (): JSX.Element => {
  // Sections mount only after the intro animation, so arriving with a hash
  // from another page finds nothing to scroll to. The router's own scroll
  // fires as they mount but ignores scroll-margin and buries the target under
  // the sticky navbar, so re-assert the position once that has settled.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const timer = setTimeout(
      () => document.getElementById(hash)?.scrollIntoView(),
      800
    )

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageAnimation>
      <Layout className="!py-0 !px-0 !max-w-full mb-10 md:mb-16">
        <Hero />
        <AboutAndSpecialty />
        <ProfessionalExperience />
        <SelectedProjects />
        <Publications />
        <Education />
        <LanguagesFrameworksTools />
      </Layout>
    </PageAnimation>
  )
}

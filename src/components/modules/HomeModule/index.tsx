import { useEffect } from 'react'
import { Layout, PageAnimation } from '@elements'
import {
  AboutAndSpecialty,
  Education,
  Hero,
  ProfessionalExperience,
  Publications,
  SelectedProjects,
  TechStackSection,
} from './sections'

export const HomeModule = (): JSX.Element => {
  // Arriving on a hash, the router scrolls the target flush with the top of
  // the viewport and under the sticky navbar, ignoring its scroll-margin.
  // In-page clicks are unaffected, so re-assert only this first landing once
  // the router's own scroll has finished.
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return

    const timer = setTimeout(
      () => document.getElementById(hash)?.scrollIntoView(),
      600
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
        <TechStackSection />
      </Layout>
    </PageAnimation>
  )
}

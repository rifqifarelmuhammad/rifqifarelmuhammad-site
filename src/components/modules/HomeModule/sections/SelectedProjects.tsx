import Link from 'next/link'
import { SELECTED_PROJECTS } from '../constants/selectedProjects'
import { SelectedProjectCard } from '../module-elements'

const [FEATURED_PROJECT, ...OTHER_PROJECTS] = SELECTED_PROJECTS

export const SelectedProjects = (): JSX.Element => (
  <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-6 md:gap-7 px-6 md:px-8 lg:px-14">
    <h2 className="font-bold text-[#FFDE24] text-3xl md:text-4xl">
      Selected Projects
    </h2>

    <SelectedProjectCard {...FEATURED_PROJECT} isFeatured />

    <div className="grid md:grid-cols-2 gap-6 md:gap-7">
      {OTHER_PROJECTS.map((project) => (
        <SelectedProjectCard key={project.title} {...project} />
      ))}
    </div>

    <Link
      href="/projects"
      className="w-fit font-semibold text-[#FFDE24] underline text-sm md:text-base hover:text-[#FFF500] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFDE24]"
    >
      View All Projects
    </Link>
  </section>
)

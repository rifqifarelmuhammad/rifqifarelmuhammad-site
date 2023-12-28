import { PageAnimation } from '@elements'
import { PROJECTS } from './constant'
import { ProjectCard } from './module-elements'

export const ProjectsModule = () => {
  return (
    <PageAnimation>
      <section className="max-w-[1440px] w-full mx-auto flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-16 px-6 md:px-8 lg:px-12 xl:px-16 py-10 md:py-14 lg:py-20">
        <h1 className="text-[#ffffff]/[0.75] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center">
          Projects
        </h1>
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((props) => (
            <ProjectCard {...props} />
          ))}
        </div>
      </section>
    </PageAnimation>
  )
}

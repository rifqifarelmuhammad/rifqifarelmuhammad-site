import { Layout, PageAnimation } from '@elements'
import { PROJECTS } from './constant'
import { ProjectCard } from './module-elements'

export const ProjectsModule = (): JSX.Element => (
  <PageAnimation>
    <Layout>
      <div className="flex flex-col gap-3 md:gap-4 items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFDE24] text-center">
          Projects
        </h1>

        <p className="max-w-[640px] text-white/80 text-center text-sm md:text-base">
          A collection of projects across backend, full-stack, and systems
          development.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-7 xl:gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={project.title} {...project} isPriority={!idx} />
        ))}
      </div>
    </Layout>
  </PageAnimation>
)

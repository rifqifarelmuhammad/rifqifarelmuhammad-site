import { Layout, PageAnimation } from '@elements'
import { PROJECTS } from './constant'
import { ProjectCard } from './module-elements'

export const ProjectsModule = () => {
  return (
    <PageAnimation>
      <Layout>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFDE24] text-center">
          Projects
        </h1>
        <div className="grid lg:grid-cols-2 gap-7 xl:gap-8">
          {PROJECTS.map((props) => (
            <ProjectCard key={props.title} {...props} />
          ))}
        </div>
      </Layout>
    </PageAnimation>
  )
}

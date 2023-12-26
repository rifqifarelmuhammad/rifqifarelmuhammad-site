import { PROJECTS } from './constant'
import { ProjectCard } from './module-elements'

export const ProjectsModule = () => {
  return (
    <div className="w-full flex flex-col gap-10 py-10">
      <h1 className="text-[#ffffff]/[0.75] font-bold text-6xl text-center">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-7">
        {PROJECTS.map((props) => (
          <ProjectCard {...props} />
        ))}
      </div>
    </div>
  )
}

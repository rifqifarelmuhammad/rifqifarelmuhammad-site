import { PROJECTS } from './constant'
import { ProjectCard } from './module-elements'

export const ProjectsModule = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {PROJECTS.map(() => (
        <ProjectCard />
      ))}
    </div>
  )
}

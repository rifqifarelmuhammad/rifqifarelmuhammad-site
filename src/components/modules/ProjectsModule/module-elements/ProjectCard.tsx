import Link from 'next/link'
import { ProjectCardProps } from '../interface'
import { GrGithub } from 'react-icons/gr'
import Image from 'next/image'
import { getImage } from '@utils'

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  techStacks,
  webProps,
  githubUrl,
}) => {
  return (
    <div className="w-full bg-[#ffffff]/[0.1] rounded-lg shadow-xl">
      <div className="relative w-full aspect-[3/1] overflow-hidden rounded-lg">
        <Image alt={title} src={getImage(imageUrl)} layout="fill" />
      </div>
      <div className="flex flex-col gap-4 px-4 py-2 pb-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-semibold text-2xl">{title}</h3>
          <p className="text-white text-lg">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {techStacks.map((Icon) => (
            <Icon className="w-9 h-9" />
          ))}
        </div>

        <div className="flex flex-row gap-3">
          {webProps && (
            <Link href={webProps.webUrl} target="_blank">
              <div className="relative w-10 h-10">
                <Image
                  src={webProps.logoUrl}
                  alt={webProps.webUrl}
                  fill
                  sizes="none"
                  quality={100}
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          )}
          <Link href={githubUrl} target="_blank">
            <GrGithub className="text-white w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  )
}

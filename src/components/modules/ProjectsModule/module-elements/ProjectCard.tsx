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
    <div className="w-full bg-[#ffffff]/[0.1] rounded-lg shadow-lg lg:shadow-xl relative">
      <div className="relative w-full aspect-[7/3] md:aspect-[3/1] lg:aspect-[5/2] xl:aspect-[3/1] overflow-hidden rounded-lg">
        <Image alt={title} src={getImage(imageUrl)} layout="fill" />
      </div>
      <div className="flex flex-col gap-3 md:gap-4 px-3 md:px-4 py-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
            {title}
          </h3>
          <p className="text-white text-sm md:text-base lg:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:gap-4 pb-12 md:pb-[60px] lg:pb-16">
          {techStacks.map((Icon) => (
            <Icon className="w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9" />
          ))}
        </div>

        <div className="flex flex-row gap-3 lg:gap-4 absolute bottom-3 md:bottom-4">
          {webProps && (
            <Link href={webProps.webUrl} target="_blank">
              <div className="relative w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9">
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
            <GrGithub className="text-white w-7 md:w-8 lg:w-9 h-7 md:h-8 lg:h-9" />
          </Link>
        </div>
      </div>
    </div>
  )
}

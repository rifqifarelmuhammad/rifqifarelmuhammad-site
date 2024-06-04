import Link from 'next/link'
import Image from 'next/image'
import { getImage } from '@utils'
import { ProjectCardProps } from '../../types/projectsModule'

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  techStacks,
  website,
  git,
  documentation,
}) => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-[#210A0A] to-[#6B1D1D] rounded-lg shadow-lg lg:shadow-xl relative">
      <div className="relative w-full aspect-[500/225] overflow-hidden rounded-lg">
        <Image
          alt={title}
          src={getImage(imageUrl)}
          fill
          sizes="none"
          priority
        />
      </div>
      <div className="flex flex-col flex-1 gap-6 lg:gap-8 p-4 md:p-8 lg:p-6 xl:p-8">
        <div className="flex flex-col gap-3 flex-grow">
          <div className="flex flex-wrap gap-3 md:gap-4">
            {techStacks.map((Icon, idx) => (
              <div key={`icon-${idx + 1}`}>
                <Icon className="w-7 md:w-9 h-7 md:h-9" />
              </div>
            ))}
          </div>

          <h3 className="text-white font-semibold text-lg md:text-3xl">
            {title}
          </h3>
          <p className="text-white text-sm md:text-lg text-justify">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap md:flex-row gap-5 md:gap-6">
          {website && (
            <Link
              href={website}
              target="_blank"
              className="text-sm md:text-base rounded-lg px-8 py-2 bg-gradient-to-b from-[#FFDE24] to-[#A68F0F] font-bold"
            >
              Website
            </Link>
          )}
          {git && (
            <Link
              href={git}
              target="_blank"
              className={`text-sm md:text-base rounded-lg px-8 py-2 font-bold ${
                website
                  ? 'text-white border-2 border-[#FFF500]'
                  : 'bg-gradient-to-b from-[#FFDE24] to-[#A68F0F]'
              }`}
            >
              Git
            </Link>
          )}
          {documentation && (
            <Link
              href={documentation}
              target="_blank"
              className="text-sm md:text-base rounded-lg px-1 py-2 font-bold text-[#FFF500] hover:text-yellow-300"
            >
              Documentation
              <hr className="border-[1px] border-[#FFF500]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

import { TechStackCategoryProps } from '../../types/homeModule'

export const TechStackCategory = ({
  title,
  technologies,
}: TechStackCategoryProps): JSX.Element => (
  <div className="flex flex-col gap-3 md:gap-4">
    <h3 className="font-semibold text-white text-lg md:text-xl">{title}</h3>

    <ul className="flex flex-wrap gap-2 md:gap-3">
      {technologies.map(({ name, Icon }) => (
        <li
          key={name}
          className="flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-white/90 text-sm md:text-base"
        >
          {/* Decorative: the label already names the technology. */}
          {Icon && <Icon aria-hidden className="w-4 h-4 md:w-5 md:h-5" />}
          {name}
        </li>
      ))}
    </ul>
  </div>
)

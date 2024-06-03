import Link from 'next/link'
import { NavLinkProps } from '../types/navbar'
import { useWindowSize } from 'usehooks-ts'

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  url,
  currentLocation,
  Icon,
}) => {
  const { width } = useWindowSize()

  return (
    <Link
      href={url}
      className={`group flex md:flex-col gap-2 md:gap-0 items-center font-medium rounded-full ${
        width < 768 &&
        'w-[75%] justify-center py-1 duration-300 transition-all ease-in-out'
      } ${
        url === currentLocation
          ? 'text-[#FFF500] bg-[#ffffff]/[0.1] md:bg-transparent'
          : 'text-[#FFFFFF]/[0.5]'
      }`}
    >
      {width < 768 && <Icon className="w-[18px] h-[18px]" />}
      {label}
      {width >= 768 && (
        <hr
          className={`w-full group-hover:h-[2px] group-hover:bg-white border-none duration-300 transition-all ease-in-out`}
        />
      )}
    </Link>
  )
}

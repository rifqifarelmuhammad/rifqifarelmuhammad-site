import Link from 'next/link'
import { NavLinkProps } from './interface'
import { useWindowSize } from 'usehooks-ts'

export const NavLink: React.FC<NavLinkProps> = ({
  label,
  url,
  currentLocation,
}) => {
  const { width } = useWindowSize()

  return (
    <Link
      href={url}
      className={`py-2 md:text-center ${
        url === currentLocation ? 'text-[#FFF500]' : 'text-white'
      } font-semibold rounded-full group ${
        width < 768 &&
        `px-4 duration-300 transition-all ease-in-out hover:bg-[#ffffff]/[0.1] hover:ml-1`
      }`}
    >
      {label}
      {width >= 768 && (
        <hr
          className={`group-hover:h-[2px] group-hover:bg-white border-none duration-300 transition-all ease-in-out`}
        />
      )}
    </Link>
  )
}

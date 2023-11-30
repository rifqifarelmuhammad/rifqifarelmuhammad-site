import Link from "next/link";
import { NavLinkProps } from "./interface";
import { useWindowSize } from "usehooks-ts";

export const NavLink: React.FC<NavLinkProps> = ({ label, url, currentLocation }) => {
  const { width } = useWindowSize()

  return (
    <Link
      href={url}
      className={`py-2 md:text-center text-white font-bold rounded-full group ${
        width < 768 && (
          `px-4 duration-300 transition-all ease-in-out hover:bg-[#ffffff]/[0.1] hover:ml-1 ${
            url === currentLocation? 'bg-[#ffffff]/[0.1]' : ''
          }`
        )}`
      }
    >
      {label}
      {width >= 768 && (
        <hr className={`group-hover:h-[2px] group-hover:bg-white border-none duration-150 transition-all ease-in-out ${url === currentLocation? 'h-[2px] bg-white' : ''}`} />
      )}
    </Link>
  )
}
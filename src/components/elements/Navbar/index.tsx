import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MENUS } from './constant'
import { NavLink } from './NavLink'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'

export const Navbar = () => {
  const router = useRouter()
  const { pathname } = router
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleNavCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <nav className="sticky inset-0 z-50 w-full flex flex-col md:items-center justify-center shadow-lg bg-[#101F33]">
      <div className="flex items-center py-3 px-7 md:px-12 lg:px-16 xl:px-20 justify-between w-full">
        <Link href={'/'}>
          <Image
            src={'/icons/rfm.png'}
            alt={'rifqi-farel-muhammad'}
            width={48}
            height={48}
            quality={100}
            priority
          />
        </Link>

        <div className="items-center gap-7 hidden md:flex">
          {MENUS.map(({ label, url }) => (
            <NavLink label={label} url={url} currentLocation={pathname} />
          ))}
        </div>

        <button className="flex md:hidden" onClick={handleNavCollapse}>
          <Bars3Icon className="w-6 text-white" />
        </button>
      </div>

      <div
        className={`flex-col items-start gap-4 py-4 px-4 md:hidden ${
          isCollapsed ? 'hidden' : 'flex'
        }`}
      >
        {MENUS.map(({ label, url }) => (
          <NavLink label={label} url={url} currentLocation={pathname} />
        ))}
      </div>
    </nav>
  )
}

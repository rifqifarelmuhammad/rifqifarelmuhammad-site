import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MENUS } from './constant'
import { NavLink } from './NavLink'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useWindowSize } from 'usehooks-ts'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'

export const Navbar = () => {
  const router = useRouter()
  const { pathname } = router
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const { width } = useWindowSize()

  return (
    <nav className="sticky inset-0 z-50 w-full flex flex-col md:items-center justify-center shadow-lg bg-[#100E0E]">
      <div className="flex items-center py-4 px-7 md:px-12 lg:px-16 xl:px-20 justify-between w-full">
        <Link href={'/'}>
          <Image
            src={'/images/rfm.png'}
            alt={'rifqi-farel-muhammad'}
            width={48}
            height={48}
            quality={100}
            priority
          />
        </Link>

        {width >= 768 && (
          <div className="items-center gap-7 hidden md:flex">
            {MENUS.map(({ label, url, Icon }) => (
              <NavLink
                key={label}
                label={label}
                url={url}
                currentLocation={pathname}
                Icon={Icon}
              />
            ))}
          </div>
        )}

        <button
          className="flex md:hidden"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <Bars3Icon className="w-6 text-white" />
        </button>
      </div>

      <AnimatePresence>
        {width < 768 && isNavbarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 w-full bg-[#100E0E] z-50 p-5 flex flex-col gap-6"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsNavbarOpen(false)}>
                <AiOutlineClose className="text-white w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {MENUS.map(({ label, url, Icon }) => (
                <NavLink
                  key={label}
                  label={label}
                  url={url}
                  currentLocation={pathname}
                  Icon={Icon}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

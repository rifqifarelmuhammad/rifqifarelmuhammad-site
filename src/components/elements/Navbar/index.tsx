import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MENUS } from './constant'
import { NavLink } from './NavLink'
import { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useWindowSize } from 'usehooks-ts'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'

// In document order, which is what makes the last match the current section.
const SECTION_IDS = MENUS.filter(({ url }) => url.startsWith('/#')).map(
  ({ url }) => url.slice(2)
)

// Matches the scroll-mt on the sections themselves.
const SCROLL_OFFSET = 96

export const Navbar = (): JSX.Element => {
  const router = useRouter()
  const { pathname } = router
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { width } = useWindowSize()

  // Every hash link shares the home pathname, so comparing paths alone would
  // leave Home highlighted the whole way down the page.
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const update = () => {
      const reached = SECTION_IDS.filter((id) => {
        const section = document.getElementById(id)
        if (!section) return false

        // Rounded: a section jumped to lands on a subpixel boundary, and a
        // bare comparison would credit the section above it.
        return Math.round(section.getBoundingClientRect().top) <= SCROLL_OFFSET
      })

      // The last section is the footer, which the page cannot scroll far
      // enough to bring up to the offset, so claim it once the page bottom is
      // reached.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      setActiveSection(
        atBottom
          ? SECTION_IDS[SECTION_IDS.length - 1]
          : reached[reached.length - 1] ?? ''
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    return () => window.removeEventListener('scroll', update)
  }, [pathname])

  const currentLocation = activeSection ? `/#${activeSection}` : pathname

  return (
    <nav
      id="navbar"
      className="sticky inset-0 z-50 w-full flex flex-col md:items-center justify-center shadow-lg bg-[#100E0E]"
    >
      <div className="flex items-center py-4 px-7 md:px-12 lg:px-16 xl:px-20 justify-between w-full">
        <Link href={'/'} className="relative aspect-square w-12">
          <Image
            src={'/images/rfm.png'}
            alt={'rifqi-farel-muhammad'}
            fill
            sizes="none"
            quality={100}
            priority
          />
        </Link>

        {width >= 768 && (
          <div className="items-center gap-3 lg:gap-7 hidden md:flex">
            {MENUS.map(({ label, url, Icon }) => (
              <NavLink
                key={label}
                label={label}
                url={url}
                currentLocation={currentLocation}
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
            className="fixed inset-y-0 w-full bg-[#100E0E] z-50 p-5 flex flex-col"
          >
            {/* Out of flow so it cannot push the menu off the centre. */}
            <button
              className="absolute right-5 top-5"
              onClick={() => setIsNavbarOpen(false)}
            >
              <AiOutlineClose className="text-white w-5 h-5" />
            </button>

            <div className="flex flex-1 flex-col gap-4 items-center justify-center">
              {MENUS.map(({ label, url, Icon }) => (
                <NavLink
                  key={label}
                  label={label}
                  url={url}
                  currentLocation={currentLocation}
                  Icon={Icon}
                  onClick={() => setIsNavbarOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

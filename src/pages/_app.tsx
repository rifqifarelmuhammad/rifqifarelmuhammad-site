import '../styles/globals.css'
import { Footer, Header, Navbar } from '@elements'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Header />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div>
          <main className="w-full min-h-screen bg-[#0B1726]">
            <section className="max-w-[1440px] flex mx-auto">
              <Component {...pageProps} key={router.pathname} />
            </section>
          </main>
        </motion.div>
      </AnimatePresence>
      <Toaster />
      <Footer />
    </>
  )
}

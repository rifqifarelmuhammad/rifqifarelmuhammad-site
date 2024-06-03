import '../styles/globals.css'
import { Footer, Navbar } from '@elements'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import { NextSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <NextSeo
        defaultTitle="Passionate Software Engineer | Rifqi Farel Muhammad"
        title={pageProps?.title}
        description={pageProps?.description}
        canonical={pageProps?.canonical}
        openGraph={pageProps?.openGraph}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div>
          <main className="w-full min-h-screen bg-[#100E0E]">
            <Component {...pageProps} key={router.pathname} />
          </main>
        </motion.div>
      </AnimatePresence>
      <Toaster />
      <Footer />
    </>
  )
}

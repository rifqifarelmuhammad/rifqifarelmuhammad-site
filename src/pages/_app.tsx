import '../styles/globals.css'
import { Header, Navbar } from '@components'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main className='w-full min-h-screen bg-[#0B1726]'>
        <section className='max-w-[1440px] flex mx-auto'>
          <Component {...pageProps} />
        </section>
      </main>
    </>
  )
}

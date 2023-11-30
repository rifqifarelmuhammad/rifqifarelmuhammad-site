import { HomePageAnimation } from '@components'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [animation, setAnimation] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false)
    }, 3000)
  }, [])

  return (
    <div className="w-full">
      <div className="align-middle">
        {animation ? (
          <HomePageAnimation />
        ) : (
          <>
            <motion.div
              animate={{ scale: [0, 0.25, 0.5, 0.75, 1] }}
              transition={{ times: 0.5 }}
            >
              <div className="w-full h-screen flex items-center justify-center">
                <h1 className="text-white text-6xl">Hey There 👋</h1>
              </div>
            </motion.div>
          </>
        )}

        {/* <h1 className='text-white text-6xl'>asdad</h1> */}
      </div>
    </div>
    // <h1 className='text-white text-5xl font-bold'>Rifqi Farel Muhammad</h1>
  )
}

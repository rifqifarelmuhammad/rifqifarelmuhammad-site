import { HomePageAnimation } from '@elements'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HomePage } from '@modules'

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
              <HomePage />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

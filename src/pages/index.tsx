import { HomePageAnimation } from '@elements'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HomeModule } from '@modules'

export default function Home() {
  const [animation, setAnimation] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setAnimation(false)
    }, 2950)
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
              transition={{ times: 1 }}
            >
              <HomeModule />
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}

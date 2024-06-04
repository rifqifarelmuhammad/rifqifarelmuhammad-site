import { motion } from 'framer-motion'
import { VARIANTS } from './constant'
import { ReactNode } from 'react'

export const PageAnimation = ({ children }: { children: ReactNode }): JSX.Element => (
  <motion.div initial="hidden" animate="enter" exit="exit" variants={VARIANTS}>
    {children}
  </motion.div>
)

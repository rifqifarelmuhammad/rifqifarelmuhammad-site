import { motion } from 'framer-motion'
import { VARIANTS } from './constant'
import { PageAnimationProps } from './interface'

export const PageAnimation: React.FC<PageAnimationProps> = ({ children }) => (
  <motion.div initial="hidden" animate="enter" exit="exit" variants={VARIANTS}>
    {children}
  </motion.div>
)

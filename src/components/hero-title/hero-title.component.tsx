import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import styles from './hero-title.component.module.css'

interface HeroTitleProps {
  children?: ReactNode
  className?: string
}
export default function HeroTitle({ children, className }: HeroTitleProps) {
  return (
    <motion.h1
      className={`${styles.title} ${className}`}
      initial={{ opacity: 0, y: 145 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      {children}
    </motion.h1>
  )
}

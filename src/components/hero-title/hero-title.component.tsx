import { ReactNode } from 'react'
import styles from './hero-title.component.module.css'

interface HeroTitleProps {
  children?: ReactNode
  className?: string
}
export default function HeroTitle({ children, className }: HeroTitleProps) {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>
}

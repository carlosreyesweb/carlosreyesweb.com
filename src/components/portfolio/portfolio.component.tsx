import { motion } from 'framer-motion'
import ButtonLink from '../button-link/button-link.component'
import styles from './portfolio.component.module.css'

interface PortfolioProps {}
export default function Portfolio(props: PortfolioProps) {
  const sectionVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  return (
    <motion.section
      id="portfolio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      className={styles.container}
    >
      <h2 className={styles.title}>What have I done before?</h2>
      <p className={styles.content}>
        Check my portfolio to watch some of the recently projects I have worked.
      </p>
      <ButtonLink
        variant="main"
        href="https://behance.net/carlosreyesweb"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Watch portfolio
      </ButtonLink>
    </motion.section>
  )
}

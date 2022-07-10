import { motion } from 'framer-motion'
import gmailIcon from '../../assets/gmail-icon.svg'
import linkedinIcon from '../../assets/linkedin-icon.svg'
import ButtonLink from '../button-link/button-link.component'
import styles from './contact.component.module.css'

interface ContactProps {}
export default function Contact(props: ContactProps) {
  const linksContainerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Are you ready?</h2>
      <p className={styles.content}>
        Click one of the buttons below to contact me!
      </p>
      <motion.nav
        variants={linksContainerVariants}
        initial="hidden"
        whileInView="visible"
        className={styles.linksContainer}
      >
        <ButtonLink
          variant="main-regular"
          href="mailto:contact@carlosreyesweb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailIcon} alt="Gmail" className={styles.linkIcon} /> E-mail
        </ButtonLink>
        <ButtonLink
          variant="main-regular"
          href="https://linkedin.com/in/carlosreyesweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className={styles.linkIcon} />{' '}
          LinkedIn
        </ButtonLink>
      </motion.nav>
    </section>
  )
}

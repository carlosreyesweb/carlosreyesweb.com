import { motion } from 'framer-motion'
import landingIcon from '../../assets/landing-icon.svg'
import pwaIcon from '../../assets/pwa-icon.svg'
import websiteIcon from '../../assets/website-icon.svg'
import styles from './services.component.module.css'

interface ServicesProps {}
export default function Services(props: ServicesProps) {
  const articleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
  return (
    <section id="services" className={styles.container}>
      <h2 className={styles.title}>What can I do?</h2>
      <section className={styles.servicesContainer}>
        <motion.article
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <img className={styles.serviceIcon} src={websiteIcon} alt="Website" />
          <h3 className={styles.serviceName}>Dynamic Websites</h3>
          <p className={styles.serviceDescription}>
            Websites could be more dynamic than they are nowadays.{' '}
            <strong>
              With me, you can create your own eye-catching, animated,
              interactive website
            </strong>
            , no matter if it's a blog, an e-Commerce or your own portfolio; we
            can make it impressive for your readers, potential clients or
            recruiters.
          </p>
        </motion.article>
        <motion.article
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <img className={styles.serviceIcon} src={pwaIcon} alt="PWA" />
          <h3 className={styles.serviceName}>Progressive Web Apps</h3>
          <p className={styles.serviceDescription}>
            A Progressive Web App (PWA) is an application that runs in the
            browser, but it acts as a native application. It is cool for
            projects like stores, content platforms, social media and other
            heavily-interactive software ideas. If you think your idea fits
            here, contact me!
          </p>
        </motion.article>
        <motion.article
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <img
            className={styles.serviceIcon}
            src={landingIcon}
            alt="Landing Page"
          />
          <h3 className={styles.serviceName}>Landing Pages</h3>
          <p className={styles.serviceDescription}>
            No matter which type of project you got in mind;{' '}
            <strong>
              you need a landing page, a site where your potential clients could
              become real clients.
            </strong>{' '}
            It is your cover letter, your face in front of new people in your
            target audience. We can make it real in almost no time!
          </p>
        </motion.article>
      </section>
    </section>
  )
}

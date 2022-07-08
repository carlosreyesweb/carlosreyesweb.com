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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem labore vitae nobis similique et, delectus molestiae velit
            obcaecati architecto dignissimos dolore autem nesciunt sed quis!
            Quisquam ex alias consectetur.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem labore vitae nobis similique et, delectus molestiae velit
            obcaecati architecto dignissimos dolore autem nesciunt sed quis!
            Quisquam ex alias consectetur.
          </p>
        </motion.article>
        <motion.article
          variants={articleVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.service}
        >
          <img className={styles.serviceIcon} src={landingIcon} alt="Landing Page" />
          <h3 className={styles.serviceName}>Landing Pages</h3>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolorem labore vitae nobis similique et, delectus molestiae velit
            obcaecati architecto dignissimos dolore autem nesciunt sed quis!
            Quisquam ex alias consectetur.
          </p>
        </motion.article>
      </section>
    </section>
  )
}

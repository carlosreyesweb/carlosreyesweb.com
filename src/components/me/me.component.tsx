import { motion } from 'framer-motion'
import profilePic from '../../assets/me.jpg'
import ButtonLink from '../button-link/button-link.component'
import styles from './me.component.module.css'

interface MeProps {}
export default function Me(props: MeProps) {
  const profilePicVariants = {
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
    <section id="me" className={styles.container}>
      <motion.img
        src={profilePic}
        alt="Carlos Reyes Picture"
        className={styles.picture}
        variants={profilePicVariants}
        initial="hidden"
        whileInView="visible"
      />
      <article className={styles.article}>
        <h2 className={styles.title}>Who am I?</h2>
        <p className={styles.content}>
          Hi! My name is <strong>Carlos Reyes</strong>, as you might have
          noticed before. I'm a <strong>Front-End Web Developer</strong> and a
          passionate about web design and programming. I'm a{' '}
          <strong>React specialist</strong>, but I also work with{' '}
          <strong>Angular</strong>, and I'm constantly learning about new web
          development ecosystems to get better on my area of expertise.
        </p>
        <p className={styles.content}>
          I have worked in some projects for clients in countries such as
          Australia, Brazil, United States and Venezuela, all of them in
          collaboration with consulting companies such as{' '}
          <a
            href="https://neuralgeeks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            neuralgeeks
          </a>
          . I can make{' '}
          <strong>minimalist and eye-catching web interfaces</strong> that not
          only look good, but also work flawlessly.
        </p>
        <ButtonLink
          variant="main-regular"
          href="https://linkedin.com/in/carlosreyesweb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meet me on LinkedIn
        </ButtonLink>
      </article>
    </section>
  )
}

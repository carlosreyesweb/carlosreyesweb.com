import { motion } from 'framer-motion'
import profilePic from '../../assets/me.jpg'
import ButtonLink from '../button-link/button-link.component'
import styles from './me.component.module.css'

interface MeProps {}
export default function Me(props: MeProps) {
  return (
    <section id="me" className={styles.container}>
      <motion.img
        src={profilePic}
        alt="Carlos Reyes Picture"
        className={styles.picture}
        initial={{ opacity: 0, y: 120 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      />
      <article className={styles.article}>
        <h2 className={styles.title}>Who am I?</h2>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          accusantium sint? Saepe modi quasi placeat qui dolore omnis nam
          laudantium, voluptas id sunt, quidem magni. Nostrum quos voluptate
          facilis numquam. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p className={styles.content}>
          Nisi corrupti vitae amet pariatur alias doloribus libero cum dolorum
          deleniti! Recusandae blanditiis, eos nihil alias adipisci consectetur
          quae laboriosam iusto deserunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Provident non ut in illo perferendis nostrum
          molestias! Blanditiis unde alias ducimus animi error neque,
          consectetur explicabo adipisci exercitationem temporibus sequi
          quaerat.
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

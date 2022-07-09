import { motion } from 'framer-motion'
import cesarColinaPicture from '../../assets/cesar-colina-picture.jpg'
import gabrielNoyaPicture from '../../assets/gabriel-noya-picture.jpg'
import styles from './reviews.component.module.css'

interface ReviewsProps {}
export default function Reviews(props: ReviewsProps) {
  const reviewVariants = {
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
    <section id="reviews" className={styles.container}>
      <h2 className={styles.title}>What coworkers think about my job?</h2>
      <section className={styles.reviewsContainer}>
        <motion.article
          variants={reviewVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.review}
        >
          <img
            className={styles.coworkerPicture}
            src={gabrielNoyaPicture}
            alt="Gabriel Noya"
          />
          <h3 className={styles.coworkerName}>Gabriel Noya</h3>
          <p className={styles.coworkerJob}>
            CEO of{' '}
            <a
              href="https://neuralgeeks.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              neuralgeeks
            </a>
          </p>
          <blockquote className={styles.reviewMessage}>
            I am impressed by Carlos' ability to learn and adapt to different
            scenarios and projects. He is attentive, a good listener and learns
            from every second he works. I have no doubt that he is one of the
            best front-end developers that I have ever seen.
          </blockquote>
        </motion.article>
        <motion.article
          variants={reviewVariants}
          initial="hidden"
          whileInView="visible"
          className={styles.review}
        >
          <img
            className={styles.coworkerPicture}
            src={cesarColinaPicture}
            alt="Cesar Colina"
          />
          <h3 className={styles.coworkerName}>Cesar Colina</h3>
          <p className={styles.coworkerJob}>
            Software Engineer II at{' '}
            <a
              href="https://shutterstock.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shutterstock
            </a>{' '}
            &amp; Course Instructor
          </p>
          <blockquote className={styles.reviewMessage}>
            Carlos is a developer with a passion for details and good quality.
            He redesigned our website on Academia Web and created multiple posts
            for our tech blog. His job was pretty amazing and I recommend him
            for hire to be part of a team looking for a passionate developer
          </blockquote>
        </motion.article>
      </section>
    </section>
  )
}

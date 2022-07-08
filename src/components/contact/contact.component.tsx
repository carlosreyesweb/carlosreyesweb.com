import styles from './contact.component.module.css'

interface ContactProps {}
export default function Contact(props: ContactProps) {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>
        One step closer to achieve impressive web presence.
      </h2>
      <p className={styles.content}>Fill the form below to contact me.</p>
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <h3 className={styles.formTitle}>Contact form</h3>
        </form>
      </section>
    </section>
  )
}

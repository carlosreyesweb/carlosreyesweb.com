import styles from './footer.component.module.css'

interface FooterProps {}
export default function Footer(props: FooterProps) {
  return (
    <footer className={styles.container}>
      <small className={styles.copyright}>
        &copy; 2022 | Carlos Reyes | All rights reserved.
      </small>
    </footer>
  )
}

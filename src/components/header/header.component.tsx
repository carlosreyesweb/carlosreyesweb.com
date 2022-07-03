import OutlineLogo from '../../assets/outline-logo.svg?component'
import ButtonLink from '../button-link/button-link.component'
import Navbar from '../navbar/navbar.component'
import styles from './header.component.module.css'

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <header className={styles.container}>
      <Navbar />
      <div className={styles.leftBox}>
        <h1 className={styles.title}>Diseña tu presencia web conmigo.</h1>
        <nav className={styles.linksContainer}>
          <ButtonLink variant="main" href="#contact">
            Contacto
          </ButtonLink>
          <ButtonLink
            variant="secondary-regular"
            href="https://behance.net/carlosreyesweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </ButtonLink>
        </nav>
      </div>
      <OutlineLogo className={styles.outlineLogo} />
    </header>
  )
}

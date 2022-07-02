import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu-icon.svg'
import styles from './navbar.component.module.css'

interface NavbarProps {}
export default function Navbar(props: NavbarProps) {
  return (
    <nav className={styles.container}>
      <a href="https://carlosreyesweb.com">
        <img src={logo} alt="Carlos Reyes" className={styles.logo} />
      </a>
      <button className={styles.menuButton}>
        <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
      </button>
    </nav>
  )
}

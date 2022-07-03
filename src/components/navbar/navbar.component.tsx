import { useRef } from 'react'
import logo from '../../assets/logo.svg'
import menuIcon from '../../assets/menu-icon.svg'
import styles from './navbar.component.module.css'

interface NavbarProps {}
export default function Navbar(props: NavbarProps) {
  const menuRef = useRef<HTMLUListElement>(null)
  const toggleMenu = () => menuRef.current?.classList.toggle(styles.shown)
  const closeMenuOnLinkClick = () => {
    if (innerWidth > 768) return
    menuRef.current?.classList.remove(styles.shown)
  }

  return (
    <nav className={styles.container}>
      <a href="https://carlosreyesweb.com">
        <img src={logo} alt="Carlos Reyes" className={styles.logo} />
      </a>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <img src={menuIcon} alt="Menu" className={styles.menuIcon} />
      </button>
      <ul ref={menuRef} className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#me" className={styles.link} onClick={closeMenuOnLinkClick}>
            Quién soy
          </a>
        </li>
        <li className={styles.menuItem}>
          <a
            href="#services"
            className={styles.link}
            onClick={closeMenuOnLinkClick}
          >
            Servicios
          </a>
        </li>
        <li className={styles.menuItem}>
          <a
            href="https://behance.net/carlosreyesweb"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenuOnLinkClick}
          >
            Portfolio
          </a>
        </li>
        <li className={styles.menuItem}>
          <a
            href="#contact"
            className={styles.link}
            onClick={closeMenuOnLinkClick}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

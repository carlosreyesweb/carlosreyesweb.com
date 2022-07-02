import HeroTitle from '../hero-title/hero-title.component'
import Navbar from '../navbar/navbar.component'
import styles from './header.component.module.css'

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <header className={styles.container}>
      <Navbar />
      <HeroTitle>
        Diseña tu presencia web conmigo.
      </HeroTitle>
    </header>
  )
}

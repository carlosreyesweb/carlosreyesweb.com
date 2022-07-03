import outlineLogo from '../../assets/outline-logo.svg'
import HeroTitle from '../hero-title/hero-title.component'
import Navbar from '../navbar/navbar.component'
import styles from './header.component.module.css'

interface HeaderProps {}
export default function Header(props: HeaderProps) {
  return (
    <header className={styles.container}>
      <Navbar />
      <HeroTitle>Diseña tu presencia web conmigo.</HeroTitle>
      <img src={outlineLogo} alt="Carlos Reyes Logo" className={styles.outlineLogo} />
    </header>
  )
}

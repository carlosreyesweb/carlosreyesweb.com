import Header from './components/header/header.component'
import Me from './components/me/me.component'
import Portfolio from './components/portfolio/portfolio.component'
import Services from './components/services/services.component'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Me />
        <Services />
        <Portfolio />
      </main>
    </>
  )
}

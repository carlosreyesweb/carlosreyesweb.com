import Contact from './components/contact/contact.component'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'
import Me from './components/me/me.component'
import Portfolio from './components/portfolio/portfolio.component'
import Reviews from './components/reviews/reviews.component'
import Services from './components/services/services.component'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Me />
        <Services />
        <Portfolio />
        <Reviews />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

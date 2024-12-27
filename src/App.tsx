import { AboutUs } from './components/about-us/about-us'
import { Footer } from './components/footer/footer'
import { GlobalContainer } from './components/global-container/global-container'
import { Header } from './components/header/header'
import { HeroSection } from './components/hero/hero'
import { QASection } from './components/qa-section/qa-section'

function App() {
  return (
    <>
      <GlobalContainer wrapperStyles={{
        position: 'sticky',
        top: 0,
        background: 'white',
        boxShadow: '1px 0 10px gray',
        zIndex: 1,
      }}>
        <Header />
      </GlobalContainer>
      
      <HeroSection />

      <GlobalContainer>
        <AboutUs />
        <QASection />
      </GlobalContainer>

      <Footer />
    </>
  )
}

export default App

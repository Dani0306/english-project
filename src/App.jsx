import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Navbar from './components/Navbar'
import Prices from './components/Prices'
import Process from './components/Process'
import Services from './components/Services'
import WhatsappLogo from './components/WhatsappLogo'

function App() {

  return (
    <main className='overflow-x-hidden w-full min-h-screen relative'>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
        <AboutMe />
        <Process />
        <Services />
        <Prices />
        <Footer />
      </MaxWidthWrapper>
        <WhatsappLogo />
    </main>
  )
}

export default App

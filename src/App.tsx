import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Products } from './components/sections/Products'
import { Philosophy } from './components/sections/Philosophy'
import { Industries } from './components/sections/Industries'
import { DefensiveStrategy } from './components/sections/DefensiveStrategy'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Philosophy />
        <Industries />
        <DefensiveStrategy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

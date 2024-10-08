import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../css/main.css'
import Marquee from '../components/Marquee'

const Home: React.FC = () => {
  return (
    <>
        <header id="header" className='header'>
            <Navbar />
            <Hero />
        </header>

        <Marquee />
        <main className='main' id='main'>
            <About />
            <Services />
            <Education />
            <Projects />
            <Contact />
        </main>

        <Footer />
    
    </>
  )
}

export default Home

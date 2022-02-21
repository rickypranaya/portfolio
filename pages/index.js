import { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  const aboutRef = useRef(null)
  const expRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  const goAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const goExp = () => {
    expRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const goProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const goContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className=" bg-gray-900">
      <Navbar
        goAbout={goAbout}
        goExp={goExp}
        goProject={goProject}
        goContact={goContact}
      />
      <Intro goAbout={goAbout} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={expRef}>
        <Experience goProject={goProject} />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  )
}

export default Home

import { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Headroom from 'react-headroom'
import useVisible from '../utils/useIsVisible'
import classNames from 'classnames'

const Home = () => {
  const introRef = useRef(null)
  const aboutRef = useRef(null)
  const expRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const introVisible = useVisible(introRef)
  const aboutVisible = useVisible(aboutRef)
  const expVisible = useVisible(expRef)
  const contactVisible = useVisible(contactRef)

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
    <div className="h-full bg-gray-900">
      <Headroom disableInlineStyles>
        <Navbar
          goAbout={goAbout}
          goExp={goExp}
          goProject={goProject}
          goContact={goContact}
        />
      </Headroom>
      <div
        ref={introRef}
        className={classNames(
          'delay-300 duration-1000',
          introVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'
        )}
      >
        <Intro goAbout={goAbout} />
      </div>
      <div
        ref={aboutRef}
        className={classNames(
          'delay-300 duration-1000',
          aboutVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'
        )}
      >
        <About />
      </div>
      <div
        ref={expRef}
        className={classNames(
          'delay-300 duration-1000',
          expVisible
            ? 'visible translate-y-0 opacity-100'
            : 'invisible translate-y-20 opacity-0'
        )}
      >
        <Experience goProject={goProject} />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div
        ref={contactRef}
        className={classNames(
          'delay-300 duration-1000',
          contactVisible ? 'opacity-100' : ' opacity-0'
        )}
      >
        <Contact />
      </div>
    </div>
  )
}

export default Home

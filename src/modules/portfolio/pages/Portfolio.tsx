import Hero from '../components/hero/Hero'
import Skills from '../components/skills/Skills'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Projects from '../components/projects/Projects'
import PortFooter from '../layouts/PortFooter'

const Portfolio = () => {
  return (
    <main
    className='
    #bg-green-50 flex-1
    '
    >
      <Hero/>
      <Skills/>
      <About/>
      <Contact/>
      <Projects/>
      <PortFooter/>
    </main>
  )
}

export default Portfolio
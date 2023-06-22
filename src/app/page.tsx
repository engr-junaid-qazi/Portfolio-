import Image from 'next/image'
import Hero from './components/hero'
import Contact from './components/contact'
import Project from './components/project'
import About from './components/about'
import SKill from './components/skills'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <SKill/>
      <Project/>
      <Contact/>
    </div>
  )
}

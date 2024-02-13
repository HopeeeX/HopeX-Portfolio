import React from 'react'
import Hero from "../components/hero/hero"
import About from "../components/about/about"
import Services from "../components/services/services"
import Projects from "../components/projects/projects"
import Collaborate from "../components/other/collaborate"
import NavBar from "../components/other/navbar"

const page = () => {
  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Collaborate/>
    </div>
  )
}

export default page
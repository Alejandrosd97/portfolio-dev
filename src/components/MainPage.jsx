import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Otro from './Otro'
import Projects from './Projects'
import Footer from './Footer'
import '../App.css'


export default function MainPage() {
  return (
    <div>
      <Otro/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

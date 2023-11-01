import React from 'react'
import '../css/footer.css'
import github from '../imgs/github.png'
import linkedin from '../imgs/linkedin.png'



export default function Footer() {
  return (
    <section id='footer'>
      <h4 className='nombre'>Alejandro Santamaria Donet</h4>
      <ul>
        <li><a href="/#home">HOME</a></li>
        <li><a href="/#projects">PROJECTS</a></li>
        <li><a href="/#about">ABOUT</a></li>
        <li><a href="/#contact">CONTACT</a></li>
      </ul>
      <div className='logos'>
        <a href="#"><img src={linkedin} /></a>
        <a href="#">        <img src ={github}/>
</a>

      </div>
     
      
    </section>
  )
}

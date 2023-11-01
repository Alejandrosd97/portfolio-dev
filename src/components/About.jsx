import React from 'react'
import '../css/about.css'
import curriculum from '../assets/curriculum.pdf'


export default function About() {
  return (
    <section id='about'>
        <div className='about-container'>
            <div className='about-main-description'>
                <div className='main-about'>
                    <h3 className='about-main-title'>ABOUT ME</h3>
                    <p className='description'>I'm a full-stack developer based out of Valencia, Spain. I love building apps that solve real-world problems,
                        and that are delightful to use.</p>
                </div>
            </div>

            <div className='about-second-row'>
                <div className='secondary-about'>
                    <h4 className='about-title'>Get to know me</h4>
                    <p className='description'>I am a passionate physiotherapist who ventured into the world of web development through self-guided learning. My journey into web development began as a curiosity, but what started as a hobby turned into a true passion.</p>
                    <a href={curriculum} download='Alejandro-Santamaria-Resume'>
                        <button className='button-blue'>DOWNLOAD MY RESUME</button>
                    </a>
                </div>

                <div className='secondary-about'>
                    <h4 className='about-title'>My Skills</h4>
                    <div className='skills'>
                        <div className='skill'>HTML</div>
                        <div className='skill'>JavaScript</div>
                        <div className='skill'>CSS</div>
                        <div className='skill'>NodeJs</div>
                        <div className='skill'>Mongodb</div>
                        <div className='skill'>Express</div>
                        <div className='skill'>React</div>
                        <div className='skill'>NextJs</div>
                        <div className='skill'>Python</div>
                        <div className='skill'>Git</div>
                        <div className='skill'>Django</div>
                        <div className='skill'>SQL</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

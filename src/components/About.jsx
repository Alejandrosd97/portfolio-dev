import React from 'react'
import '../css/about.css'
import curriculum from '../assets/curriculum.pdf'
import html from '../assets/html.png'
import css from '../assets/css.png'
import python from '../assets/python.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import django from '../assets/django.png'
import git from '../assets/git.png'
import sql from '../assets/sql.png'
import next from '../assets/next.png'
import js from '../assets/js.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'




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
                        <div className='skill'>
                            <img src ={html} />
                            <span>HTML</span> 
                        </div>
                        <div className='skill'>
                            <img src ={js} />
                            <span>JavaScript</span> 
                        </div>
                        <div className='skill'>
                            <img src ={css} />
                            <span>CSS</span> 
                        </div>
                        <div className='skill'>
                            <img src ={node} />
                            <span>NodeJS</span> 

                        </div>
                        <div className='skill'>
                            <img src ={mongo} />
                            <span>MongoDB</span> 

                        </div>
                        <div className='skill'>
                            <img src ={express} />
                            <span>Express</span> 

                        </div>
                        <div className='skill'>
                            <img src ={react} />
                            <span>React</span> 
                        </div>
                        <div className='skill'>
                            <img src ={next} />
                            <span>NextJs</span> 
                        </div>
                        <div className='skill'>
                            <img src ={react} />
                            <span>React Native</span> 
                        </div>
                        <div className='skill'>
                            <img src ={python} />
                            <span>Python</span> 
                        </div>
                        <div className='skill'>
                            <img src ={git} />
                            <span>Git</span> 
                        </div>
                        <div className='skill'>
                            <img src ={django} />
                            <span>Django</span> 

                        </div>
                        <div className='skill'>
                            <img src ={sql} />
                            <span>SQL</span> 

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

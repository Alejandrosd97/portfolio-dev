import React from 'react'
import '../css/hero.css'
import linkedin from '../imgs/linkedin.png'
import github from '../imgs/github.png'
import { motion } from 'framer-motion'


const textVariants ={
    initial : {
        opacity :0,
    },
    animate : {
        opacity :1,
        transition : {
        duration:1,
        staggerChildren : 0.1
        }
  }
}


export default function Hero() {
  return (
     <>
    <section className='blue-container'>
        <div className='social-media-all'>
            <div className='social-media'>
                <img src={linkedin} alt="" />
            </div>
            <div className='social-media'>
                <img src={github} alt="" />           
            </div>
        </div>


        <motion.div variants={textVariants} initial = 'initial' animate='animate' className='main-info'>
            <motion.h1 variants={textVariants}>MY NAME IS ALEJANDRO</motion.h1>
            <motion.p variants={textVariants}>I am a passionate frontend developer based in London, UK. 
                My specialities are React JS and Tailwind CSS, and I love building apps that are
                delightful to use.</motion.p>
            <motion.a variants={textVariants} href="#projects"><button className='main-button button-white'>CHECK MY PROJECTS!</button></motion.a>
        </motion.div>
    </section>
    <div class="wave-container"></div>
   </>
  )
}

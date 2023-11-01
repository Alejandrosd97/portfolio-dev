import {React, useRef} from 'react'
import '../css/projects.css'
import Project from './Project'
import {pro} from '../assets/projects.js'
import {motion , useScroll, useSpring } from 'framer-motion'


  export default function Projects(){
    
    const ref = useRef()

    // const { scrollYProgress } = useScroll({target : ref, offset : ['end end', 'start start']})
    // const scaleX = useSpring(scrollYProgress, {
    //   stiffness: 100,
    //   damping : 30
    // })
    
    const proyectos = pro.map((p)=>{
      return <Project title={p.title} key={p.id} short={p.short} id={p.id}/>
    })

  return (
    <>
        
        <div className='main-cont' ref={ref} id='projects'>
            <div className='projects-main-description'>
                <h3 className='projects-title'>PROJECTS</h3>
                {/* <motion.div style={{scaleX}} className="progressBar" ></motion.div> */}
                
            </div>
  
            {proyectos}
          
        </div>
        </>
      
  )
}

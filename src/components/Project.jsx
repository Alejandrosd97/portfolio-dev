import {React, useRef} from 'react'
import '../css/project.css'
import {Link} from 'react-router-dom'
import { motion, useTransform, useScroll } from 'framer-motion'



export default function Project(props) {

  const ref= useRef()
  const { scrollYProgress } = useScroll({
    target: ref
  })

  const y = useTransform( scrollYProgress, [0,1], [-150, 150])
  return (
    <section>

    <div className='container-pro'>
      <div className="wrapper">
        <div ref={ref} className="img-container">
          <img  className='foto' src='https://picsum.photos/800/400' alt="" />
      </div>
      <motion.div className='text-container' style={{y}} >
        <h3 >{props.title}</h3>
        <p>{props.description}</p>
          <Link to={`/project/${props.id}`}>
            <button className='button-blue'>LEARN MORE</button>
          </Link>
      </motion.div>
      </div>
    </div>


    </section>
  )
}

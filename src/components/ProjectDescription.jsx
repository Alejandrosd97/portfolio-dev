import React from 'react'
import '../css/bigFoto.css'
import '../css/about.css'
import Slider from './Slider'

export default function ProjectDescription(props) {
          console.log(props.text)

  return (

      
    
        <div className='project-detail'>
          <h1>{props.text.title}</h1>
          <Slider text={props.text}/> 
          {/* <div className='project-detail-foto'>
            <img src='https://picsum.photos/800/400' alt=""/>
          </div> */}
            <div className='description-container'>
              <div className='project-description'>
                  <h4 className='detail-subtitle'>Project details</h4>
                  <p>{props.text.description}</p>
                  <p>{props.text.explicacion}</p>


              </div>
              <div className='project-tools'>
                <h4 className='detail-subtitle'>
                  Tools Used
                </h4>
                <div className='skills'>
                  {
                    props.text.stack.map((skill)=>{
                      return <div key={skill} className='skill'>{skill}</div>
                    })
                  }

                </div>
                <div className="live-example">
                  <h4 className='detail-subtitle'>See live</h4>
                  <div className="live-buttons">
                    <button className='button-blue'>LIVE LINK</button>
                    <button className='button-blue'>SEE CODE</button>
                  </div>
                </div>
              </div>
            </div>
       </div>
    
  )
}

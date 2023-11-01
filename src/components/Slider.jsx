import React, { useState } from 'react'
import {FaArrowRight} from 'react-icons/fa'
import '../css/slider.css'


 

export default function Slider({text}) {

    const {fotos} = text
    console.log('hola')
    console.log(text.fotos)
    const [current, setCurrent] = useState(0)

    function nextFoto(){
        setCurrent(current === fotos.length - 1 ? 0 : current +1 )
    }

    function previousFoto(){
        setCurrent(current === 0 ? fotos.length - 1 : current -1)
    }


    const sliderFotos = fotos.map((foto, index)=>{
        return (
            <div key={index} className={index === current ? 'current' : 'hidden'}>
                <FaArrowRight onClick={previousFoto} size={60} className='arrowLeft' style={{transform:'rotate(180deg)'}}/>
                {
                index === current && 
                <img className='foto' src={foto} alt="" />
                }
                <FaArrowRight onClick={nextFoto} className='arrowRight' size={60}/>

            </div> 
        )
    })
  return (
    <div className='carrusel'>
        {sliderFotos}
    </div>
    
  )
}


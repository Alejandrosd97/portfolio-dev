import React from 'react'
import '../css/contact.css'


export default function Contact() {
  return (
    <>
    <div class="wave-container"></div>
    <section id='contact'>
        <div className=' contact'>
            <h3 className='contact-title'>CONTACT</h3>
            <form action="https://getform.io/f/f3349849-52ca-4dcf-9786-8471339871a0"
                method='post'
                className='contact-form'>
            
                <div className="row">
                    <label htmlFor="name">Name:</label>
                        <input type="text" id='name' name='Name' required/>
                </div>

                <div className="row">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='Email' required  />
                </div>
                <div className="row">
                    <label htmlFor="name">Message:</label>
                    <textarea id='message' name='Message' required/>
                </div>
                <button className='contact-button'>SEND MESSAGE</button>

            </form>





        </div>
    </section>
    </>
  )
}

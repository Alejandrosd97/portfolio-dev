import {React, useState} from 'react'
import '../css/navbar.css'


function Navbar(props){

    const [menu, setMenu] = useState(false)

    function toggleMenu(){
        setMenu(prev => !prev)
    }

    return(
        <nav className='nav'>
            <div className='nav-container'>
                <div className='navbar-personal-info'>
                    <img className='logo-principal'src='https://picsum.photos/200'/>
                    <span className='name'>ALEJANDRO SANTAMARIA</span>
                </div>
                    <div className={menu ? 'cancelar': 'hamburger'}
                            onClick={toggleMenu}>

                    </div>
            
            

                
                <ul id='navbar-ul' className={menu ? 'active': ''}>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/'>HOME</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#projects'>PROJECTS</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#about'>ABOUT</a></li>
                    <li onClick={window.innerWidth < 980 ? toggleMenu : null}><a href='/#contact'>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
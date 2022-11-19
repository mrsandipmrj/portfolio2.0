import React, {useState} from 'react'
import './header.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    const [showBar,setShowBar] = useState(false);
    return (
        <>
            <Nav className='header' id="home">
                <div className='logo'><h1>Portfolio<span className='ver'>2.O</span></h1></div>
                <div className= { showBar ? "showBar":'Navbar'}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>

                    </ul>
                </div>
                <div className="socialmedia">
                    <ul>
                        <li><a href="https://facebook.com/sandipmrj"><FaFacebookSquare /></a></li>
                        <li><a href="https://instagram.com/sandipmrj"><FaInstagramSquare /></a></li>
                        <li><a href="https://linkedin.com/sandipmrj"><FaLinkedin /></a></li>
                    </ul>
                </div>
                <div className="hamburgur-menu"> <a href="#" onClick={()=>setShowBar(!showBar)}><GiHamburgerMenu/></a> </div>
            </Nav>
        </>
    )
}

export default Header
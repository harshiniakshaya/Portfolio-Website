import React from 'react'
import About from './About'
import NavBar from './NavBar'
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Home = () => {
  return (
    <>
        <div className='section z-3 position-relative' id="home">
            <h2 className='text-center'>Harshini Akshaya</h2>
            <p>Passionate about MERN & UI/UX ; venturing into Cybersecurity & RPA</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a href="https://github.com/harshiniakshaya/"><IoLogoGithub style={{color:"white", fontSize:"40px", marginBottom:'10px'}}/></a>
                <a href="https://www.linkedin.com/in/harshiniakshaya/"><IoLogoLinkedin style={{color:"white", fontSize:"40px", marginBottom:'10px', marginLeft: '30px'}}/></a>
            </div>
            
        </div>
    </>
  )
}

export default Home
import React from 'react'
import ProjectCard from './ProjectCard'
import ParticlesComponent from './Particles'
import profileImage from '../assets/profile.png';


const About = () => {
  return (
    <>
        <div className='section' id="about">
        <ParticlesComponent id="particles"/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-12 text-center'>
                        <img src={profileImage} className='img-fluid z-3 position-relative mt-5'/>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-5 my-2'>
                        <h1>About Me</h1>
                        <p>
                        Hey there👋!
                        <br/>I'm a passionate web developer with experience in MERN stack technologies🌐 and proficient in Java♨️, with a solid foundation in C and Python.
                        <br/>Fascinated by the worlds of RPA🤖 and Cybersecurity🛡️, I'm eager to dive deeper and expand my expertise in these areas. I'm always on the lookout for opportunities to push boundaries and make a difference in the tech world👩🏻‍💻. Let's connect and create something amazing together🙌!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
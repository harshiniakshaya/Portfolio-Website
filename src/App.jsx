import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import ParticlesComponent from './components/Particles'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Projects />
      <Certifications />
      <Achievements />
    </>
  )
}

export default App
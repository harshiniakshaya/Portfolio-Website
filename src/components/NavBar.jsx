import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="home"
                smooth={true}
                duration={50}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={50}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={50}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="certifications"
                smooth={true}
                duration={50}
              >
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="achievements"
                smooth={true}
                duration={50}
              >
                Achievements
              </Link>
            </li>
          </ul>
          {/* <button className='btn'>Resume</button> */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
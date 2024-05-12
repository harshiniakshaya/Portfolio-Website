import React from 'react'
import ProjectCard from './ProjectCard'

import ytcloneImage from '../assets/ytclone.png';
import gpacalcImage from '../assets/gpacalc.png';
import weatherappImage from '../assets/weatherapp.png';
import todolistImage from '../assets/todolist.png';

const Projects = () => {
  return (
    <div className='section z-3 position-relative' id="projects">
        <div className='container m-5'>
            <h1 className='text-center my-5'>My Projects</h1>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Youtube Clone"
                        imageSrc={ytcloneImage}
                        description="A replica of YouTube's interface using HTML and CSS, providing a visual representation of core functionalities."
                        projectUrl="https://github.com/harshiniakshaya/Youtube-Clone-Project"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="GPA Calculator"
                        imageSrc={gpacalcImage}
                        description="HTML/CSS web app tailored for Rajalakshmi Engineering College students, utilizing Node.js, Express.js, and MongoDB for seamless GPA calculation."
                        projectUrl="https://github.com/harshiniakshaya/GPA-CALC"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Weather App using OpenWeather API"
                        imageSrc={weatherappImage}
                        description="React-based weather application integrating OpenWeather API to provide real-time weather data with user-friendly interface."
                        projectUrl="https://weather-app-jade-iota.vercel.app/"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Todo List (MERN)"
                        imageSrc={todolistImage}
                        description="A comprehensive task management system built with the MERN (MongoDB, Express.js, React, Node.js) stack, providing seamless task organization and tracking capabilities."
                        projectUrl="https://github.com/harshiniakshaya/TodoList-MERN"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
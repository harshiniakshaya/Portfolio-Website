import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='section z-3 position-relative' id="projects">
        <div className='container m-5'>
            <h1 className='text-center my-5'>My Projects</h1>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Youtube Clone"
                        imageSrc="src\assets\ytclone.png"
                        description="A replica of YouTube's interface using HTML and CSS, providing a visual representation of core functionalities."
                        projectUrl="https://github.com/harshiniakshaya/Youtube-Clone-Project"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="GPA Calculator"
                        imageSrc="src\assets\gpacalc.png"
                        description="HTML/CSS web app tailored for Rajalakshmi Engineering College students, utilizing Node.js, Express.js, and MongoDB for seamless GPA calculation."
                        projectUrl="https://github.com/harshiniakshaya/GPA-CALC"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Weather App using OpenWeather API"
                        imageSrc="src\assets\weatherapp.png"
                        description="React-based weather application integrating OpenWeather API to provide real-time weather data with user-friendly interface."
                        projectUrl="https://weather-app-jade-iota.vercel.app/"
                    />
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <ProjectCard 
                        title="Todo List (MERN)"
                        imageSrc="src\assets\todolist.png"
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
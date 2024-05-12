import React from 'react';
import { IoLogoGithub } from "react-icons/io";

const ProjectCard = ({ title, imageSrc, description, projectUrl }) => {
  return (
    <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }} id="project">
            <img src={imageSrc} className="card-img-top mt-3" alt={title}
                
            />
            <div className="card-body text-center" >
                <h5 className="card-title" style={{height:'50px'}}>{title}</h5>
                <p className="card-text" style={{ height: '75px', overflowY: 'auto',fontSize:'12px'}}>{description}</p>
                <a href={projectUrl} ><IoLogoGithub style={{color:"white", fontSize:"40px", marginBottom:'10px'}}/></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
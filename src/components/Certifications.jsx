import React from 'react';
import ProjectCard from './ProjectCard';

const Certifications = () => {
  const certificationData = [
    {
      title: "Programming Fundamentals using Python - Part 1 - Infosys Springboard (Jun 2023)",
      link: "https://drive.google.com/file/d/1jbOXNKsi-xkS-tdxaf6dNvAl5YbZzO6l/view"
    },
    {
      title: "Figma UI UX Design Essentials (Oct 2023)",
      link: "https://www.udemy.com/certificate/UC-dcd3caac-e055-41de-bf34-5f63bca9a676/"
    },
    {
        title: "NPTEL Online Certification - The Joy of Computing Using Python (Oct 2023)",
        link: "https://www.linkedin.com/posts/harshiniakshaya_nptel-online-certification-activity-7138479673990123520-6KEt?utm_source=share&utm_medium=member_desktop"
      },
      {
        title: "UiPath Academy Automation Explorer Training (Dec 2023)",
        link: "https://credentials.uipath.com/4dd97c6f-ddd9-4cad-ac37-8fb4c53e7aea#gs.99dtch"
      },
      {
        title: "NPTEL Online Certification - Privacy and Security in Online Social Media (Apr 2024)",
        link: "https://drive.google.com/drive/folders/14uns158gb968f7DXV9C6Yz1oUUaRyEjL"
      },
      {
        title:"ORACLE - Database Programming with SQL (May 2024)",
        link:"https://drive.google.com/drive/folders/14uns158gb968f7DXV9C6Yz1oUUaRyEjL"
      }
    // Add more certification items here as needed
  ];

  return (
    <>
      <div className='section d-flex flex-column' id="certifications">
        <h1 className='text-center my-5 mx-4'>My Certifications</h1>
        <div className="accordion w-75" id="accordionExample">
          {certificationData.map((certification, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                  {certification.title}
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body text-center">
                  <a className='btn text-white' href={certification.link}>View Credential</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Certifications;

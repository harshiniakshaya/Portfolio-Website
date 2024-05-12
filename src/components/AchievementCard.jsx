import React from 'react'

const AchievementCard = ({title,subtitle,content}) => {
  return (
    <div className='d-flex justify-content-center'>
        <div className="card bg-transparent border border-white border-5 mb-5" style={{ width: '18rem', height:'300px' }}>
            <div className="card-body text-white ">
                <h5 className="card-title"><strong>{title}</strong></h5>
                <h6 className="card-subtitle mb-2">{subtitle}</h6>
                <p className="card-text">{content}</p>
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
            </div>
        </div>
    </div>
  )
}

export default AchievementCard
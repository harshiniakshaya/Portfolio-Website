import React from 'react'
import AchievementCard from './AchievementCard'

const Achievements = () => {
  return (
    <div className='section z-3 position-relative' id="achievements">
        <div className='container m-5'>
            <h1 className='text-center my-5 mx-4'>My Achievements</h1>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-12'>
                    <AchievementCard title="CBSE MERIT CERTIFICATE" subtitle="Top 0.1% (2022)" content="Awarded for outstanding academic performance and for being among the top 0.1 percent of successful candidates in All India Senior School Certificate Examination(COMPUTER SCIENCE) "/>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                    <AchievementCard title="TECH-A-THON - SQL DETECTIVE" subtitle="Runner (2023)" content="Solved basic SQL queries in Round 1 &  unraveled complex narrative scenarios with SQL in Rounds 2 and 3"/>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                <AchievementCard title="TECH-A-THON - DATA DASH" subtitle="Runner (2023)" content="Solved logical puzzles and answered basic data analytics questions in Round 1 & derived insights from given datasets in Round 2"/>
                </div>
                <div className='col-lg-4 col-md-4 col-12'>
                <AchievementCard title="POSTER PRESENTATION" subtitle="Winner (2024)" content="The presentation was crafted under the theme 'Future She Leads: Empowering Girls in Technology' using Figma and featured innovative design elements💡"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements
import React from 'react'
import "./index.css"
const ExperienceEducation = ({
  header,
  data
}) => {
  return (
    <div className='experience-education-main-wrapper-main'>
      <div className='container'>
        <div className='text-center'>
          <div className='section-title'>
            {header}
          </div>
        </div>
        <div className='experience-education-main-wrapper'>
          {
            data?.map((d) => {
              return (
                <div className='experience-education-main-wrapper-inner'>
                  <div className='experience-duration-text'>  {d?.duration} </div>
                  <div className='experience-tech-text'>  {d?.technology} </div>
                  <div className='experience-company-text'>  {d?.name} </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExperienceEducation

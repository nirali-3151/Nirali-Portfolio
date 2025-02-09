import React from 'react'
import "./Skills.css"
import { SKILL_CONST } from '@constants/index'
import Image from '@componants/ImageComp/Image'

const Skills = () => {
  return (
    <>
    <div className='text-center'>
    <div className='section-title'>My Skills</div>
    </div>
    <div className='container skills-main-wrapper'>
      {
        SKILL_CONST?.map((skill, index) => {
          return (
            <div
              key={index}
              className='skills-main-wrapper-inner'
            >
              <div>
                <Image image={skill.icon} width='50px' height='50px' />
              </div>
              <div className='text1 text-center'>
                {skill.name}
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Skills

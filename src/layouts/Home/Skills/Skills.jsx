import React from 'react'
import "./Skills.css"
import { SKILL_CONST } from '@constants/index'
import Image from '@componants/ImageComp/Image'

const Skills = () => {
  return (
    <div className='container skills-main-wrapper'>
      {
        SKILL_CONST?.map((skill,index) => {
          return (
            <div
            key={index}
            className='skills-main-wrapper-inner'
            >
              <div>
                <Image image={skill.icon} width='100px' height='100px' />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Skills

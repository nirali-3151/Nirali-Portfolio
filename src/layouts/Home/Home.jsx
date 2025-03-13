import React from 'react'
import "./index.css"
import Skills from './Skills/Skills'
import Services from './Services/Services'
import ContactUs from '@layouts/ContactUs/ContactUs'
import SelfIntro from './SelfIntro/SelfIntro'
import NavBarComp from '@componants/Header/Header'
import Footer from '@componants/Footer/Footer'
import ExperienceEducation from './ExperienceEducation/ExperienceEducation'
import { EXPERIENCE_CONST, SKILL_CONST } from '@constants/index'
const Home = () => {
  return (
    <div>
      <SelfIntro />
      <Services />
      <Skills
        data={SKILL_CONST} />
      <ExperienceEducation
        header="Experience"
        data={EXPERIENCE_CONST}
      />
      <div style={{ marginTop: "70px" }}>
        <ContactUs />
      </div>
    </div>
  )
}

export default Home

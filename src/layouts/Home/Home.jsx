import React from 'react'
import "./index.css"
import Skills from './Skills/Skills'
import Services from './Services/Services'
import ContactUs from '@layouts/ContactUs/ContactUs'
import SelfIntro from './SelfIntro/SelfIntro'
import NavBarComp from '@componants/Header/Header'
const Home = () => {
  return (
    <div>
      <NavBarComp />
      <SelfIntro />
      <Services />
      <Skills />
      <div style={{margin: "70px 0"}}>
        <ContactUs />
      </div>
    </div>
  )
}

export default Home

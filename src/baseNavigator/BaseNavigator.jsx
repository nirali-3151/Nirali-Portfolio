import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavigationConst from './NavigationConst'
import Home from '@layouts/Home/Home'
import Works from '@layouts/Works/Works'
import NavBarComp from '@componants/Header/Header'
import Footer from '@componants/Footer/Footer'
import ServicesDetails from '@layouts/ServicesDetails/ServicesDetails'

const BaseNavigator = () => {
  return (
    <div>
      <NavBarComp />
      <Routes>
        <Route path={NavigationConst?.home} element={<Home />} />
        <Route path={NavigationConst?.works} element={<Works />} />
        <Route path={NavigationConst?.webDevelopment} element={<ServicesDetails />} />
        <Route path={NavigationConst?.mobileDevelopment} element={<ServicesDetails />} />
        <Route path={NavigationConst?.backendAndApiDevelopment} element={<ServicesDetails />} />
        <Route path={NavigationConst?.appOptimization} element={<ServicesDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default BaseNavigator

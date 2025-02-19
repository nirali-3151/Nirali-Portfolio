import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavigationConst from './NavigationConst'
import Home from '@layouts/Home/Home'
import Works from '@layouts/Works/Works'

const BaseNavigator = () => {
  return (
    <div>
      <Routes>
        <Route path={NavigationConst?.home} element={<Home />} />
        <Route path={NavigationConst?.works} element={<Works />} />
      </Routes>
    </div>
  )
}

export default BaseNavigator

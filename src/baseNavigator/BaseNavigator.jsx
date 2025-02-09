import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavigationConst from './NavigationConst'
import Home from '@layouts/Home/Home'

const BaseNavigator = () => {
  return (
    <div>
      <Routes>
        <Route path={NavigationConst?.home} element={<Home />} />
      </Routes>
    </div>
  )
}

export default BaseNavigator

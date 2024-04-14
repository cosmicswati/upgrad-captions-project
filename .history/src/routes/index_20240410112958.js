import React from 'react'
import Home from '../modules/Home'
import { Route } from 'react-router-dom'
const Routes = () => {
  return (
      <Routes>
        <Route path='/' element={Home}/>
      </Routes>    
  )
}

export default Routes

import React from 'react'
import Home from '../modules/Home'

import { Route, Routes as Router } from 'react-router-dom'

const Routes = () => {
  return (
   <Router>
     <Route path='/' element={<Home/>} />
     
   </Router>
  )
}

export default Routes

import React from 'react'
import Home from '../modules/Home'
import { Route } from 'react-router-dom'
const routes = () => {
  return (
      <Routes>
        <Route path='/' element={Home}/>
      </Routes>    
  )
}

export default routes

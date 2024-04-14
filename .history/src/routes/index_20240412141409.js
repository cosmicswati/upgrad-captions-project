import React from 'react'
import Home from '../modules/Home'
import Form from '../modules/Authorization'
import { Route, Routes as  Router } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
        <Route Path='/' element={<Home/>} />
        <Route Path='/form' element={<Form/>} />

    </Router>

      

  
  )
}

export default Routes

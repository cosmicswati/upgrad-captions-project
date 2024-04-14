import React from 'react'
import Home from '../modules/Home'
import Form from '../modules/Authorization'
import { Route, Routes as  Router } from 'react-router-dom'

const Routes = () => {
    const routes =[
        {
            id : 1,
            name : 'home',
            path : '/',
            Component : '<Home/>'
        },
        {
            id : 2,
            name : 'sign in',
            path : '/account/signin',
            Component : '<Form/>'
        },
        {
            id : 3,
            name : 'sign up',
            path : '/account/signup',
            Component : '<Form/>'
        }

    ]
  return (
    <Router>
       {
        routes.map(({id, name, path, Component}) => {
            return <Route key={id} path= {path} element= {Component} />
        })
       }
    </Router>

      

  
  )
}

export default Routes

import React from 'react';
import Home from '../modules/Home';
import Form from '../modules/Authorization'
import { Route, Routes as Router } from 'react-router-dom';

const Routes = () => {
    const routes = [
         {
            id : 1,
           name : 'home',
           path : '/',
           Components : <Home/>
         },
         {
            id : 2,
           name : 'sign in',
           path : '/account.signin',
           Components : <Form/>
         },
         {
            id : 3,
           name : 'sign up',
           path : '/account.signup',
           Components : <Form/>
         },
    ]
  return (
    <Router>
        {
            
        }
    </Router>
  );
};

export default Routes;

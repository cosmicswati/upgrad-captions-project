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
           Components : <Form/>
         },
    ]
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/Form' element={<Form />} />
    </Router>
  );
};

export default Routes;

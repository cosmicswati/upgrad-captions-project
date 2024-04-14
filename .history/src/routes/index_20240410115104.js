import React from 'react';
import Home from '../modules/Home';
import Form from '../modules/Authorization'
import { Route, Routes as Router } from 'react-router-dom';

const Routes = () => {
    const routes = [
         {
            id : 1,
           name : 'home',
           path : <Home/>
         },
         {
            id : 2,
           name : 'sign in',
           path : <Form/>
         },
         {
            id : 3,
           name : 'sign up',
           path : <Form/>
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

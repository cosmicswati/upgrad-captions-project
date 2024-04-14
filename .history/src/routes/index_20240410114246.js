import React from 'react';
import Home from '../modules/Home';
import Form from '../modules/Authorization'
import { Route, Routes as Router } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/Form' element={<Form />} />
    </Router>
  );
};

export default Routes;

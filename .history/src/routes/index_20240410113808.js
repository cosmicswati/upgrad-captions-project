import React from 'react';
import Home from '../modules/Home';
import { Route, Routes as Router } from 'react-router-dom';

const routes = () => {
  return (
    <Router>
      <Route path='/' element={<Home />} />
    </Router>
  );
};

export default routes;

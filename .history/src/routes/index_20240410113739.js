import React from 'react';
import Home from '../modules/Home';
import { Route, Routes as Router } from 'react-router-dom';

const MyRoutes = () => {
  return (
    <Router>
      <Route path='/' element={<Home />} />
    </Router>
  );
};

export default MyRoutes;

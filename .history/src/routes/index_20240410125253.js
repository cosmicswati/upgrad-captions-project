import React from 'react';
import Home from '../modules/Home';
import Form from '../modules/Authorization'
import { Navigate, Route, Routes as Router } from 'react-router-dom';


const PrivateRoute =({children}) => {
    const isUserLoggedIn = window.localStorage.getItem('user:token') || true
    const isFormPages = window.location.pathname.includes('account')

    if(isUserLoggedIn && !isFormPages){
        return children
    }else{
        <Navigate to={'/account/signin'} replace/>
    }

}

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
           path : '/account/signin',
           Components : <Form/>
         },
         {
            id : 3,
           name : 'sign up',
           path : '/account/signup',
           Components : <Form/>
         },
    ]
  return (
    <Router>
        {
            routes.map(({id, name, path, Components}) => {
                return <Route key={id} path={path} element={<PrivateRoute>{Components}</PrivateRoute>} />
            })
        }
    </Router>
  );
};

export default Routes;

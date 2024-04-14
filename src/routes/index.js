import React from 'react';
import { Route, Routes as Router } from 'react-router-dom';
import Home from '../modules/Home';
import Form from '../modules/Authorization';

const Routes = () => {
    const routes = [
        {
            id: 1,
            name: 'home',
            path: '/',
            Component: Home
        },
        {
            id: 2,
            name: 'sign in',
            path: '/account/signin',
            Component: Form
        },
        {
            id: 3,
            name: 'sign up',
            path: '/account/signup',
            Component: Form
        }
    ];

    return (
        <Router>
            {routes.map(({ id, path, Component }) => (
                <Route key={id} path={path} element={<Component />} />
            ))}
        </Router>
    );
};

export default Routes;

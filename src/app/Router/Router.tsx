import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { authRoutes, publicRoutes } from './routes';

function Router() {
    const isAuth = false;

    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                {isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}

                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
        </Routes>
    );
}

export default Router;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import { adminRoutes, authRoutes, publicRoutes } from './routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function Router() {
    const user = useTypedSelector(state => state.userReducer)

    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                {user.isAuth && user.user.role === 'ADMIN' && adminRoutes.map(({path, Component}) => 
                    <Route key={path} path={path} element={<Component />}/>
                )}

                {user.isAuth && authRoutes.map(({ path, Component }) => 
                    <Route key={path} path={path} element={<Component />} />
                )}

                {publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
        </Routes>
    );
}

export default Router;

import React from 'react';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.scss'

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppLayout() {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;

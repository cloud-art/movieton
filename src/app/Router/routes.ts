import IRouter from '../../types/IRouter';

import { FAVOURITE_ROUTE, FILMS_ROUTE, HOMEPAGE_ROUTE, SERIES_ROUTE, LOGIN_ROUTE } from '../../utils/consts';

import Homepage from '../../components/Pages/Homepage/Homepage';
import Films from '../../components/Pages/Films/Films';
import Series from '../../components/Pages/Series/Series';
import Favourite from '../../components/Pages/Favourite/Favourite';
import Login from '../../components/Pages/Login/Login';

export const authRoutes: Array<IRouter> = [];
export const publicRoutes: Array<IRouter> = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
    {
        path: FILMS_ROUTE,
        Component: Films
    },
    {
        path: SERIES_ROUTE,
        Component: Series
    },
    {
        path: FAVOURITE_ROUTE,
        Component: Favourite
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
];

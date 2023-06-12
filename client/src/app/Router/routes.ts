import IRouter from '../../types/IRouter';

import { FAVOURITE_ROUTE, FILMS_ROUTE, HOMEPAGE_ROUTE, SERIES_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, FILM_ROUTE, REVIEWS_ROUTE, SEARCH_ROUTE } from '../../utils/consts';

import Homepage from '../../components/Pages/Homepage/Homepage';
import Films from '../../components/Pages/Films/Films';
import Series from '../../components/Pages/Series/Series';
import Favourite from '../../components/Pages/Favourite/Favourite';
import Login from '../../components/Pages/Login/Login';
import Register from '../../components/Pages/Register/Register';
import Film from '../../components/Pages/Film/Film';
import Reviews from '../../components/Pages/Reviews/Reviews';
import Search from '../../components/Pages/Search/Search';

export const authRoutes: Array<IRouter> = [
    {
        path: FAVOURITE_ROUTE,
        Component: Favourite,
    },
];
export const publicRoutes: Array<IRouter> = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    },
    {
        path: SEARCH_ROUTE + '/:searchValue',
        Component: Search
    },
    {
        path: FILMS_ROUTE,
        Component: Films
    },
    {
        path: REVIEWS_ROUTE + '/:id',
        Component: Reviews
    },
    {
        path: FILM_ROUTE + '/:id',
        Component: Film
    },
    {
        path: SERIES_ROUTE,
        Component: Series
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    }
];

import IRouter from '../../types/IRouter';
import Homepage from '../../components/Pages/Homepage/Homepage';

import { HOMEPAGE_ROUTE } from '../../utils/consts';

export const authRoutes: Array<IRouter> = [];
export const publicRoutes: Array<IRouter> = [
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
    }
];

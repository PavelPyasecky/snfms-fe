import React, {lazy} from 'react';
import {Route} from 'react-router-dom';

import { ROUTES } from './constants';

const HomePageConnect = lazy(() => import('./redux/containers/HomePageConnect'));
import {Routes} from "react-router";

const CustomRoutes = () => (
    <Routes>
        <Route exact path={ROUTES.HOME} element={<HomePageConnect/>} />
    </Routes>
);

export default CustomRoutes;

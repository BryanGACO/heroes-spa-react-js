import React from 'react'
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';
import { ErrorPage } from '../ui';
import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: "login",
        errorElement: <ErrorPage />,
        element: (
            <LoginPage />
        ),
    },
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: (
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ),
        children: routesHeroes
    }
]);
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { ErrorPage } from '../ui';
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <LoginPage /> },
            {
                path: "/",
                element: <HeroesRoutes />,
                children: routesHeroes
            },
        ]
    }
]);
import React from 'react'
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';
import { HeroesApp } from '../HeroesApp';
import { ErrorPage } from '../ui';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
      {
        path: "login",
        element: (
            <LoginPage />
        ),
        errorElement: <ErrorPage />,
    },    
    {
        path: "/", 
        element: <HeroesRoutes />,
        errorElement: <ErrorPage />,
        children: routesHeroes
    }
]);
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '../ui';
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';
import { HeroesApp } from '../HeroesApp';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HeroesApp />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <LoginPage /> },                                  
            { path: "/*", element: <HeroesRoutes /> },                      
            {
                path: "/",
                element: <HeroesRoutes />,
                children: routesHeroes
            },
        ],        
    },    
]);
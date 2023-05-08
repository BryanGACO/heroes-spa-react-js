import React from 'react'
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';
import { HeroesApp } from '../HeroesApp';
import { ErrorPage } from '../ui';
import { createBrowserRouter } from "react-router-dom";

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
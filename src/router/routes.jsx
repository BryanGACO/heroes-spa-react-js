import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { ErrorPage } from '../ui';
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppRouter />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <LoginPage /> },                                  
            { path: "/*", element: <Navigate to="/" /> },                      
            {
                path: "/",
                element: <HeroesRoutes />,
                children: routesHeroes
            },
        ],        
    },    
]);
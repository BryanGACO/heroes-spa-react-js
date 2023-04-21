import { Navigate } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";

export const routesHeroes = [
    {
        path: "/",
        element: <Navigate to="/marvel" />
    },    
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage/>,
    },
    {
        path: "search",
        element: <SearchPage/>,
    },
    {
        path: "hero/:id",
        element: <HeroPage/>,
    }
];
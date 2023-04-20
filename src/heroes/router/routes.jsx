import { Navigate } from "react-router-dom";
import { MarvelPage, DcPage } from "../pages";

export const routesHeroes = [
    {
        path: "/*",
        element: <Navigate to="/marvel" />
    },
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage/>,
    }
];
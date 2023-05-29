import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound"
import Shop from "../pages/Shop"
import Ingresar from "../pages/Ingresar"
import Contacto from "../pages/Contacto"
import {elementosLanding} from "../App"

import Home2 from "../pages/Home2"

console.log("acaaaaaa" + elementosLanding)

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home elementosLanding={elementosLanding} />,
        errorElement: <NotFound/>
    },
    {
        path: "/shop",
        element: <Shop/>,
        errorElement: <NotFound/>
    },
    {
        path: "/ingresar",
        element: <Ingresar/>,
        errorElement: <NotFound/>
    },

    {
        path: "/contacto",
        element: <Contacto/>,
        errorElement: <NotFound/>
    },
]);

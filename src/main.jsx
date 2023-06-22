import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

//con estos Context tengo que envolver todo el contenido de mi aplicacion porque representa las paginas que lo acceden
import CarritoProvider from "./context/CarritoContext";
import UserContextProvider from "./context/UserContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </CarritoProvider>
  </React.StrictMode>
);

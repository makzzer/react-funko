import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import CarritoProvider from "./context/CarritoContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarritoProvider>
      <RouterProvider router={router} />
    </CarritoProvider>
  </React.StrictMode>
);

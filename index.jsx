import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/main";
import BlogPage from "./src/Pages/BlogPage";
import Contacto from "./src/Pages/Contacto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
	{
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "contacto",
    element: <Contacto />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

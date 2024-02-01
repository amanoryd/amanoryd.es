import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/Main.jsx";
import BlogPage from "./src/Pages/BlogPage";
import Contacto from "./src/Pages/Contacto";
import CookiesPolicy from "./src/Pages/CookiesPolicy";
import PrivacyPolicy from "./src/Pages/PrivacyPolicy";
import GaleriaPage from "./src/Pages/GaleriaPage";

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
  {
    path: "cookies",
    element: <CookiesPolicy />
  },
  {
    path: "privacy",
    element: <PrivacyPolicy />
  },
  {
    path: "proyectos",
    element: <GaleriaPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

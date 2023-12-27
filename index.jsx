import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./src/main";
import BlogPage from "./src/Pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
	{
    path: "blog",
    element: <BlogPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

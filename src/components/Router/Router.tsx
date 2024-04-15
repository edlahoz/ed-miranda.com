import React, { FC } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Error from "../../pages/Error/Error";
import App from "../App/App";

const constants_routes = {
  home: {
    displayName: "Home",
    path: "/home",
  },
  projects: {
    displayName: "Projects",
    path: "/projects",
  },
  blog: {
    displayName: "Blog",
    path: "/blog",
  },
  contact: {
    displayName: "Contact",
    path: "/contact",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={"/error"} />,
    children: [
      {
        index: true,
        element: <Navigate to={constants_routes.home.path} replace />,
      },
      {
        path: constants_routes.home.path,
        element: <Home />,
      },
      {
        path: constants_routes.projects.path,
        element: <Projects />,
      },
      {
        path: constants_routes.blog.path,
        element: <Blog />,
      },
      {
        path: constants_routes.contact.path,
        element: <Contact />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const Router: FC = () => <RouterProvider router={router} />;

export { Router as default, constants_routes };

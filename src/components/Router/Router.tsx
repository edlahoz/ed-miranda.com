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
import { Constants } from "../../constants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={Constants.pages.home.path} />,
    children: [
      {
        index: true,
        element: <Navigate to={Constants.pages.home.path} replace />,
      },
      {
        path: Constants.pages.home.path,
        element: <Home />,
      },
      {
        path: Constants.pages.projects.path,
        element: <Projects />,
      },
      {
        path: Constants.pages.blog.path,
        element: <Blog />,
      },
      {
        path: Constants.pages.contact.path,
        element: <Contact />,
      },
      {
        path: Constants.pages.error.path,
        element: <Error />,
      },
    ],
  },
]);

const Router: FC = () => <RouterProvider router={router} />;

export default Router;

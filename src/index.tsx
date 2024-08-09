import "jquery-dropdown/jquery-dropdown.css";
import "jquery-dropdown/jquery-dropdown.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "slick-carousel";
import "../src/assets/css/plugins.css";
import "../src/assets/css/style.css";
import "./assets/js/custom";
import "./assets/js/plugins";
import "./assets/js/plugins2.js";
import Layout from "./components/layout.component";
import Home from "./pages/home.page";
import UsersPage from "./pages/users.page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <div>
        <h1>Admin Layout</h1>
        <Outlet />
      </div>
    ),
    children: [{ path: "users", Component: UsersPage }],
  },
  {
    path: "*",
    element: <>Sayfa Bulunamadı</>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

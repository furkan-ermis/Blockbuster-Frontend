import "jquery";
import "jquery-dropdown/jquery-dropdown.css";
import "jquery-dropdown/jquery-dropdown.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "slick-carousel";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../src/assets/css/plugins.css";
import "../src/assets/css/style.css";
import "./assets/js/custom";
import "./assets/js/plugins";
import "./assets/js/plugins2.js";
import Layout from "./components/layout.component";
import Deneme from "./pages/deneme";
import Home from "./pages/home.page";
import Movie from "./pages/movie.page";
import Movies from "./pages/movies.page";
import News from "./pages/news.page";
import NewsDetail from "./pages/newsDetail.page";
import Series from "./pages/series.page";
import SingleSeries from "./pages/singleSeries.page";
import UsersPage from "./pages/users.page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // React Router v6'da element olarak gönderilmeli
    children: [
      {
        path: "/",
        element: <Home />, // React Router v6'da element olarak gönderilmeli
      },
      {
        path: "/movies",
        element: <Movies />, // React Router v6'da element olarak gönderilmeli
      },
      {
        path: "/movies/:movieId", // Dinamik rota
        element: <Movie />,
      },
      {
        path: "/news",
        element: <News />, // React Router v6'da element olarak gönderilmeli
      },
      {
        path: "/news/:newsId",
        element: <NewsDetail />, // React Router v6'da element olarak gönderilmeli
      },
      {
        path: "/series",
        element: <Series />, // React Router v6'da element olarak gönderilmeli
      },

      {
        path: "/series/:seriesId",
        element: <SingleSeries />, // React Router v6'da element olarak gönderilmeli
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
    children: [{ path: "users", element: <UsersPage /> }],
  },
  {
    path: "*",
    element: <>Sayfa Bulunamadı</>,
  },
  {
    path: "/deneme",
    element: <Deneme />, // React Router v6'da element olarak gönderilmeli
  },
]);

root.render(<RouterProvider router={router} />);

import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPages/ErrorPage";
import Root from "./Root";
import Home, { loader as homeLoader } from "./Home";
import MoviePage, { loader as movieLoader } from "./MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: homeLoader,
      },
      {
        path: "movie/:id",
        element: <MoviePage />,
        errorElement: <ErrorPage />,
        loader: movieLoader,
      },
    ],
  },
]);

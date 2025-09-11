import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./Main.jsx";
import HomePage from "./pages/HomePage.jsx";
import IceBergPage from "./pages/IceBergPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/IceBergPage",
        element: <IceBergPage />,
      },
      { 
        path: "/galleryPage/:id",
        element: <GalleryPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

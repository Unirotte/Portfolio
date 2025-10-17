import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./Main.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const IceBergPage = lazy(() => import("./pages/IceBergPage.jsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"));
const PageDigital = lazy(() => import("./pages/PageDigital.jsx"));

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
      },
       { 
        path: "/PageDigital/:type",
        element: <PageDigital />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Suspense fallback={<div>Chargement de la page..</div>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

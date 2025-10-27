import React, { Suspense} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./Main.jsx";
import {HomePage, IceBergPage, PageExpo, PageGallery,} from "./components/IndexComponents.jsx";
import "./assets/index-all-css/index-all-css.css";

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
        path: "/PageExpo/:id",
        element: <PageExpo />
      },
       { 
        path: "/PageGallery/:type",
        element: <PageGallery />
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

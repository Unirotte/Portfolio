import { Outlet } from "react-router-dom";
import {Header, Footer, ScrollToAnchor} from "./components/index-components";

export default function App() {
  return (
    <>
    <ScrollToAnchor />
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

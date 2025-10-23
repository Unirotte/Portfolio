import { Outlet } from "react-router-dom";
import {Header, Footer, ScrollToAnchor} from "./components/IndexComponents";

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

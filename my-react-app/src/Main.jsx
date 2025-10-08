import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/Header/header.css";
import "./assets/Footer/footer.css";
import ScrollToAnchor from "./components/SrollToAnchor";

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

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/Header/header.css";
import "./assets/Footer/footer.css";

export default function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
}

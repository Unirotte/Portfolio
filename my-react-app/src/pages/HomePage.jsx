import "../assets/style.css";
import "../assets/homePage/homePage.css";
import Me from "../components/Me.jsx";
import Gallery from "../components/Gallery.jsx";
export default function HomePage() {
  return (
    <>
      <main>
        <Me />
        <Gallery />
      </main>
    </>
  );
}

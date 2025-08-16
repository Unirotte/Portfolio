import "../assets/style.css";
import "../assets/homePage/homePage.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";

export default function HomePage() {
  const presentation = dataPro.filter((item) => item.type === "presentation");
  return (
    <>
      <main>
     {presentation.map((item) => (
  <Me 
    key={item.id}
    id={item.id}
    title={item.title}
    text={item.text}
    src={item.src}
  />
))}
      </main>
    </>
  );
}

import "../assets/style.css";
import "../assets/homePage/homePage.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryProjet.json";
import Projet from "../components/Projet.jsx";

export default function HomePage() {
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
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
<div className="card-section">
{realisation.map((item) => (
<Projet 
key={item.id}
src={item.src}
title={item.title}
alt={item.title}
/>
))}
</div>
      </main>
    </>
  );
}

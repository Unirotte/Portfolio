import "../assets/style.css";
import "../assets/homePage/homePage.css";
import "../assets/Me/meIce.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";
import Gallery from "../components/Gallery.jsx";
import TriggerWarningModal from "../components/TriggerWarning.jsx";
import Skills from "../components/Skills.jsx";
// import Accroche from "../components/Accroche.jsx";
import {useState} from "react";

export default function HomePage() {
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
  const toile = dataPro.filter((item) => item.type === "toile");
  const skills = dataPro.filter((item) => item.type === "Skills");
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <div className="otherface-page">
        {!accepted && (
          <TriggerWarningModal onAccept={() => setAccepted(true)} />
        )}
      </div>

      <main>
      
        {presentation.map((item) => (
          <Me
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            introduction={item.introduction}
            sousintroduction={item.sousintroduction}
            src={item.src}
            image={item.image}
            className="ice"
          />
        ))}
{/* <Accroche /> */}
        <h2 className="titleGallery">Illustration Numérique</h2>
        <div className="gallery-section">
          {realisation.map((item) => (
            <Gallery
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              alt={item.title}
            />
          ))}
        </div>
        <h2 className="titleGallery">Dessin sur toile</h2>
        <div className="gallery-section">
          {toile.map((item) => (
            <Gallery
              key={item.id}
              id={item.id}
              src={item.src}
              title={item.title}
              alt={item.title}
            />
          ))}
        </div>
        {skills.map((item) => (
          <Skills key={item.id} title={item.title} />
        ))}
      </main>
    </>
  );
}

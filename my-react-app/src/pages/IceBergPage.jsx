import "../assets/style.css";
import "../assets/homePage/homePage.css";
import "../assets/Me/meIce.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";
import Gallery from "../components/Gallery.jsx";
import TriggerWarningModal from "../components/TriggerWarning.jsx";
import Skills from "../components/Skills.jsx";
import useFadeInOnScroll from "../components/HookScrool.jsx";
// import Accroche from "../components/Accroche.jsx";
import {useState, useEffect} from "react";

export default function HomePage() {
  useFadeInOnScroll();
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
  const toile = dataPro.filter((item) => item.type === "toile");
  const skills = dataPro.filter((item) => item.type === "Skills");
  const [accepted, setAccepted] = useState(
    () => sessionStorage.getItem("triggerAccepted") === "true"
  );
  useEffect(() => {
    sessionStorage.setItem("triggerAccepted", accepted);
  }, [accepted]);

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
        <section className="Dessin">
        <h2 className="titleGallery fade-in">Illustration Numérique</h2>
        <div className="gallery-section fade-in">
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
        </section>
        <h2 className="titleGallery fade-in">Dessin sur toile</h2>
        <div className="gallery-section fade-in">
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

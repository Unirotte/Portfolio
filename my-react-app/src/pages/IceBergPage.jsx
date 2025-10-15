import "../assets/style.css";
import "../assets/homePage/homePage.css";
import "../assets/Me/meIce.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";
import TriggerWarningModal from "../components/TriggerWarning.jsx";
import Skills from "../components/Skills.jsx";
import useFadeInOnScroll from "../components/HookScrool.jsx";
// import Accroche from "../components/Accroche.jsx";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import GallerySection from "../components/GallerySection.jsx";

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
        <GallerySection realisation={realisation} title="Digital" />
        <div className="link-gallery">
          <Link to="/PageDigital/realisation">Voir plus de digital..</Link>
        </div>
        <GallerySection realisation={toile} title="Toiles" />
        <div className="link-gallery">
          <Link to="/PageDigital/toile">Voir plus de toiles.. </Link>
        </div>
        {skills.map((item) => (
          <Skills key={item.id} title={item.title} className="ice" />
        ))}
      </main>
    </>
  );
}

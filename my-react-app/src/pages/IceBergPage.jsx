import "../assets/style.css";
import "../assets/homePage/homePage.css";
import "../assets/Me/meIce.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";
import TriggerWarningModal from "../components/TriggerWarning.jsx";
import Skills from "../components/Skills.jsx";
import useFadeInOnScroll from "../components/HookScrool.jsx";
import {useState, useEffect} from "react";
import GallerySection from "../components/GallerySection.jsx";
import LinkToiles from "../components/LinkToiles.jsx";
import {Suspense, lazy} from "react";

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
        <Suspense fallback={<div>Chargement mini galerie..</div>}>
          <GallerySection
            realisation={realisation}
            title="Digital"
            soustitle="Mes derniers digitals"
          />
          <LinkToiles to="/PageDigital/realisation" />
        </Suspense>
        <Suspense fallback={<div>Chargement mini galerie..</div>}>
          <GallerySection
            realisation={toile}
            title="Toiles"
            soustitle="Mes dernières toiles"
          />
          <LinkToiles to="/PageDigital/toile" />
        </Suspense>
        {skills.map((item) => (
          <Skills key={item.id} title={item.title} className="ice" />
        ))}
      </main>
    </>
  );
}

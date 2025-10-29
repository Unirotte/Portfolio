import dataPro from "../assets/data/gallery-draw.json";
import {useState, useEffect} from "react";
import {Skills, LinkToiles, TriggerWarningModal, useFadeInOnScroll, MiniGallery, Me, } from "../components/IndexComponents";

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
console.log("MiniGallery data:", realisation);
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
          <MiniGallery
            realisation={realisation}
            title="Digital"
            soustitle="Mes derniers digitals"
          />
          <LinkToiles to="/PageGallery/realisation" />
          <MiniGallery
            realisation={toile}
            title="Toiles"
            soustitle="Mes dernières toiles"
          />
          <LinkToiles to="/PageGallery/toile" />
        {skills.map((item) => (
          <Skills key={item.id} title={item.title} className="ice" />
        ))}
      </main>
    </>
  );
}

import dataPro from "../assets/data/gallery-draw.json";
import {useState, useEffect} from "react";
import {Skills, LinkToiles, TriggerWarningModal, useFadeInOnScroll, MiniGallery, Me, ScrollUp} from "../components/IndexComponents";

export default function HomePage() {
  useFadeInOnScroll();
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
  const toile = dataPro.filter((item) => item.type === "toile");
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
            item={item}
            id={item.id}
            title={item.title}
            text={item.text}
            introduction={item.introduction}
            sousintroduction={item.sousintroduction}
            image={item.image}
            static={item.static}
            interactiveGif={true}
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
        <ScrollUp />
      </main>
    </>
  );
}

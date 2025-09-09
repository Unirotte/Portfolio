import "../assets/style.css";
import "../assets/homePage/homePage.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryDraw.json";
import Gallery from "../components/Gallery.jsx";
import "../assets/Me/meIce.css";
import { useState } from "react";
import TriggerWarningModal from "../components/TriggerWarning.jsx";

export default function HomePage() {
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
    const toile = dataPro.filter((item) => item.type === "toile");
  const [accepted, setAccepted] = useState(false);
  
    return (
      
    <>
<div className="otherface-page">
      {!accepted && <TriggerWarningModal onAccept={() => setAccepted(true)} />}
    </div>

      <main>
     {presentation.map((item) => (
  <Me 
    key={item.id}
    id={item.id}
    title={item.title}
    text={item.text}
    introduction= {item.introduction}
    sousintroduction= {item.sousintroduction}
    src={item.src}
    className="ice"
  />
))}

<h2 className="titleGallery">Illustration Numérique</h2>
<div className="gallery-section">
{realisation.map((item) => (
<Gallery 
key={item.id}
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

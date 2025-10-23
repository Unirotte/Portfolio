import {Suspense} from "react";
import dataPro from "../assets/data/gallery-draw.json";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FunnyPhrase, AllDigitalDraw} from "../components/index-components";

export default function PageDigital() {
  const {type} = useParams();

  const realisation = dataPro.filter((item) => item.type === type);
  return (
    <main>
      <Link to="/IceBergPage" className="arrow" type="button">
        <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" aria-label="Revenir à la page précédente"/> 
      </Link>
      <h1 className="titleGallery">
        {type === "realisation" ? "Galerie realisation" : "Galerie Toiles"}
      </h1>
      <Suspense fallback={<div className="loading-funny">...</div>}>
        <FunnyPhrase />
      </Suspense>
      <div className="AllPosition fade-in visible">
        <Suspense fallback={null}>
          {realisation.map((item) => (
            <AllDigitalDraw
              key={item.id}
              id={item.id}
              src={item.src}
              alt={item.title}
            />
          ))}
        </Suspense>
      </div>
    </main>
  );
}

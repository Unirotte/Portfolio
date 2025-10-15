import AllDigitalDraw from "../components/AllDigitalDraw";
import dataPro from "../assets/data/GalleryDraw.json";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import "../assets/Drawing/Drawing.css";
import "../assets/AllDigital/AllDigital.css";

export default function PageDigital() {
  const {type} = useParams();

  const realisation = dataPro.filter((item) => item.type === type);
  return (
    <main>
      <Link to="/IceBergPage"  className="arrow" type="button">
        <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" />
      </Link>
      <h1 className="titleGallery">
        {type === "realisation" ? "Galerie realisation" : "Galerie Toiles"}
      </h1>
      <div className="AllPosition fade-in visible">
        {realisation.map((item) => (
          <AllDigitalDraw
            key={item.id}
            id={item.id}
            src={item.src}
            alt={item.title}
          />
        ))}
      </div>
    </main>
  );
}

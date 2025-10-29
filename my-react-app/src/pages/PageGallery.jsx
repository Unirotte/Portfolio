import dataPro from "../assets/data/gallery-draw.json";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FunnyPhrase, AllDraw} from "../components/IndexComponents";

export default function PageGallery() {
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
        <FunnyPhrase />
      <div className="AllPosition fade-in visible">
          {realisation.map((item) => (
            <AllDraw
              key={item.id}
              id={item.id}
              item={item}
            />
          ))}
      </div>
    </main>
  );
}

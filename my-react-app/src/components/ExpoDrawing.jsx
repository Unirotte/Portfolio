import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import SmartImage from "./SmartImage";

export default function ExpoDrawing({item, musicId}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="PositionAllDrawing">
        <SmartImage
          item={item}
          size="large"
          className="background-image"
          loading="lazy"
          showGif={true}
        />
        <button
          className="arrow back "
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Revenir à la page précédente"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" />
        </button>
        <div className="drawing-container">
          <SmartImage
            item={item}
            size="large"
            className="drawing-image"
            loading="lazy"
            showGif={true}
          />
          <h2 className="titleDraw">{item.title}</h2>
        </div>
        <div className="music-container">
          <h3 className="music-title">
            « Pour prolonger l’expérience de ce dessin, vous pouvez écouter
            cette musique. »
          </h3>
          <iframe
            src={`https://open.spotify.com/embed/track/${musicId}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            className="music"
            title="Musique d'ambiance"
          />
        </div>
      </div>
    </>
  );
}

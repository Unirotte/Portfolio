import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export default function Drawing({
  picture,
  title,
  musicId,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="PositionAllDrawing">
        <img src={picture} alt="" className="background-image" loading="lazy"></img>
        <button
          className="arrow back "
          type="button"
          onClick={() => navigate(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" type="button"/>
        </button>
        <div className="drawing-container">
          <img src={picture} alt="" className="drawing-image" loading="lazy"></img>
          <h2 className="titleDraw">{title}</h2>
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
          />
        </div>
      </div>
    </>
  );
}

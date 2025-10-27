import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";

export default function ExpoDrawing({picture, title, musicId, alt}) {
  const navigate = useNavigate();

  /*const pour le mettre le gif putôt que le webp*/
  const [src, setSrc] = useState(picture);
  useEffect(() => {
    const gifSrc = picture.replace(".webp", ".gif");
    const testImg = new Image();
    testImg.src = gifSrc;
    testImg.onload = () => {
      setSrc(gifSrc);
    };
    testImg.onerror = () => {
      setSrc(picture);
    };
  }, [picture]);
  
  return (
    <>
      <div className="PositionAllDrawing">
        <img
          src={src}
          alt={alt}
          className="background-image"
          loading="lazy"
        ></img>
        <button
          className="arrow back "
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Revenir à la page précédente"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" />
        </button>
        <div className="drawing-container">
          <img
            src={src}
            alt={alt}
            className="drawing-image"
            loading="lazy"
          ></img>
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
            title="Musique d'ambiance"
          />
        </div>
      </div>
    </>
  );
}

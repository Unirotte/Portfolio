import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import SmartImage from "./SmartImage";

export default function ExpoDrawing({item, musicId}) {
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState(item.srcLarge);

  useEffect(() => {
    const gifSrc = item.srcLarge.replace(".webp", ".gif");
    const testImg = new Image();
    testImg.src = gifSrc;

    testImg.onload = () => {
      setImageSrc(gifSrc);
    };

    testImg.onerror = () => {
      setImageSrc(item.srcLarge);
    };
  }, [item.srcLarge]);

  return (
    <div className="PositionAllDrawing">
      <SmartImage
        item={item}
        size="large"
        className="background-image"
        fetchPriority="high"
        loading="eager"
      />

      <button
        className="arrow back"
        type="button"
        onClick={() => navigate(-1)}
        aria-label="Revenir à la page précédente"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="iconArrow" />
      </button>

      <div className="drawing-container">
        <h2 className="titleDraw">{item.title}</h2>
        <img
          src={imageSrc}
          alt={item.alt}
          className="smart-image drawing-image"
          width={item.width}
          height={item.height}
          fetchPriority="auto"
          loading="lazy"
        />
      </div>

      <div className="music-container">
        <h3 className="music-title">
          « Pour prolonger l’expérience de ce dessin, vous pouvez écouter cette
          musique. »
        </h3>
        <iframe
          src={`https://www.youtube.com/embed/${musicId}`}
          width="350"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="music"
          title="Musique d'ambiance"
        />
      </div>
    </div>
  );
}

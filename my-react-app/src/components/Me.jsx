import { useState, useEffect } from "react";
import SmartImage from "./SmartImage";

export default function Me({
  className = "",
  item,
  interactiveGif = false,
  gifDuration = 4000,
  variant,
}) {
  // On récupère les données directement depuis item
  const {
    title,
    text,
    introduction,
    sousintroduction,
    image,      // GIF
    static: staticImg, // Image statique
  } = item;

  // Gestion du GIF interactif
  const [currentSrc, setCurrentSrc] = useState(
    interactiveGif ? staticImg : image
  );

  // GIF auto play au chargement
  useEffect(() => {
    if (!interactiveGif) return;

    setCurrentSrc(image);

    const timer = setTimeout(() => {
      setCurrentSrc(staticImg);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, [interactiveGif, image, staticImg, gifDuration]);

  const handleMouseEnter = () => {
    if (interactiveGif) setCurrentSrc(image);
  };

  const handleMouseLeave = () => {
    if (interactiveGif) setCurrentSrc(staticImg);
  };

  return (
    <div className="tes" id="about">
      <div className={`Presentation ${className || ""}`}>
        <div className={`me-container ${className || ""}`}></div>
        <div className="position-img">
          <SmartImage
            item={item}
            size="small"
            className={`pictureprofile ${className}`}
            fetchPriority="high"
            loading="eager"
          />
        </div>

        <div className="presentation">
          <h2 className="introduction-ombre">{title}</h2>
          <h3 className={`introduction ${className}`}>{title}</h3>
        </div>
      </div>

      {/* Bloc texte + GIF */}
      <div className="Presentation-back">
        <img
          className={`hand ${variant} ${className}`}
          src={currentSrc}
          alt={item.alt}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <h2 className={`Salutation ${className}`}>{introduction}</h2>
        <h3 className={`Name ${className}`}>{sousintroduction}</h3>
        <p className={`PresentationText ${className}`}>{text}</p>
      </div>
    </div>
  );
}

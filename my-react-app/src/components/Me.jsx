import { useState, useEffect } from "react";

export default function Me({
  className = "",
  src,
  title,
  text,
  introduction,
  sousintroduction,
  image,     
  static: staticImg,  
  interactiveGif = false,
  gifDuration = 4000,  
  variant,
}) {

  const [currentSrc, setCurrentSrc] = useState(
    interactiveGif ?  staticImg : image);
  
  useEffect(() => {
    if (!interactiveGif) return; 

    
    setCurrentSrc(image);

    const timer = setTimeout(() => {
      setCurrentSrc(staticImg);
    }, gifDuration);

    return () => clearTimeout(timer);
  }, [interactiveGif, image, staticImg, gifDuration]);


  const handleMouseEnter = () => {
    if (interactiveGif) {
      setCurrentSrc(image); 
    }
  };

  const handleMouseLeave = () => {
    if (interactiveGif) setCurrentSrc(staticImg);
  };

  return (
    <div className="tes" id="about">
      <div className={`Presentation ${className}`}>
        <div className="position-img">
          <img
            className={`pictureprofile ${className}`}
            src={src}
            alt="Portrait"
          />
        </div>

        <div className="presentation">
          <h2 className="introduction-ombre">{title}</h2>
          <h3 className={`introduction ${className}`}>{title}</h3>
        </div>
      </div>

      <div className="Presentation-back">
        <img
          className={`hand ${variant} ${className}`}
          src={currentSrc}
          alt="Animation"
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

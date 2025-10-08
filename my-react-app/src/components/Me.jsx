import "../assets/Me/me.css";

export default function Me({className = "", src, title, text, introduction, sousintroduction, image,}) {
  return (
    <div className="tes" id="about">
      <div className={`Presentation ${className || ""}`}>
        <div className={`me-container ${className || ""}`}></div>
        <div className="position-img">
          <img className={`pictureprofile ${className || ""}`} src={src} alt="Une photo de Judith" />
        </div>
        <div className="presentation">
          <h2 className="introduction-ombre">{title}</h2>
          <h3 className={` introduction ${className || ""}`}>{title}</h3>
        </div>
      </div>
      <div className="Presentation-back">
        <img className={`hand ${className || ""}`} src={image} alt="Une main qui fait un signe de bienvenue" />
        <h2 className={`Salutation ${className || ""}`}>{introduction}</h2>
        <h3 className="Name">{sousintroduction}</h3>
        <p className={`PresentationText ${className || ""}`}>{text}</p>
      </div>
    </div>
  );
}

import "../assets/Me/me.css";
import "../assets/Me/meIce.css";

export default function Me({title, text, src, alt, className = ""}) {
  return (
    <div className={`Presentation ${className || ""}`}>
      <div className={`me-container ${className || ""}`}>
        <div className="PositionAll">
          <div className="position-img">
            <img
              className="pictureprofile"
              src={src}
              alt="Une photo de Judith"
            />
          </div>
          <div className="Apropos">
            <div className="presentation">
              <h2 className="introduction">{title}</h2>
              <p className="PresentationText">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

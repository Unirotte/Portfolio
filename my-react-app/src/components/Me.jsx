import "../assets/Me/me.css";

export default function Me({title, text, src, alt}) {
  return (
    <div className="Presentation">
      <div className="me-container">
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

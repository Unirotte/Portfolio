import "../assets/Me/me.css";

export default function Me() {
  return (
    <div className="Presentation">
      <div className="me-container">
        <div class="PositionAll">
          <div className="position-img">
            <img
              className="pictureprofile"
              src="../src/assets/img/Judith.webp"
              alt="Une photo de Judith"
            />
          </div>
          <div className="Apropos">
            <div className="presentation">
              <h2 className="introduction">Bonjour, ravie de vous voir ici!</h2>
              <p className="PresentationText">
                Je suis Judith, une intégrateuse web passionnée par la création
                d'expériences utilisateur intuitives et engageantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

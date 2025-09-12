import "../assets/Drawing/Drawing.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

export default function Drawing({
  picture,
  description,
  title,
  musicId,
  background,
}) {
  return (
    <>
      <div className="PositionAllDrawing">
        <img src={picture} alt="" className="background-image"></img>
        <div className="drawing-container">
          <img src={picture} alt="" className="drawing-image"></img>
          <h2 className="titleDraw">{title}</h2>
          {/* <p>{description}</p> */}
        </div> 
        <div className="music-container">
          <h3 className="music-title">« Pour prolonger l’expérience de ce dessin, vous pouvez écouter cette musique. »</h3>
          <iframe
            src={`https://open.spotify.com/embed/track/${musicId}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
       
      </div></div>
    </>
  );
}

import "../assets/Drawing/Drawing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";


export default function Drawing({picture, description, title, musicId}) {
  return (
    <>
      <div className="PositionAllDrawing">
        <div className="icon-sun"><FontAwesomeIcon icon={faSun} /></div>
        <div className="drawing-container">
          <img src={picture} alt="" className="drawing-image"></img>
          <h2>{title}</h2>
          {/* <p>{description}</p> */}
        </div>
        <div className="music-container">
          <iframe
            src={`https://open.spotify.com/embed/track/${musicId}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      </div>
    </>
  );
}

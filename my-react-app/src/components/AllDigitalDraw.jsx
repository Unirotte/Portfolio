import "../assets/AllDigital/AllDigital.css";
import { Link } from "react-router-dom";
import "../assets/homePage/homePage.css";

export default function AllDigitalDraw({src, alt, id}) {
    return (
  <div className="Position">
          <Link to={`/galleryPage/${id}`}>
          <img className="img-position" src={src} alt={alt}></img>
          <img className="backgroundTest" src={src} alt={alt}></img>
          </Link>
        </div>
    );
}
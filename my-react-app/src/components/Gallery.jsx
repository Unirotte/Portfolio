import "../assets/Gallery/Gallery.scss";
import { Link } from "react-router-dom";

export default function Gallery({src, title, alt, id}) {
  return (
    
    <div className="column">
        <div className="row">
          <Link to={`/galleryPage/${id}`}>
          <img className="imgGallery" src={src} alt={alt}></img>
          </Link>
        </div>
      </div>
  );
}

import {Link} from "react-router-dom";

export default function AllDigitalDraw({src, alt, id}) {
  return (
    <div className="Position">
      <Link to={`/galleryPage/${id}`}>
        <img
          className="img-position"
          src={src}
          alt={alt}
          loading="lazy"
          fetchPriority="hight"
        ></img>
        <img
          className="backgroundTest"
          src={src}
          alt={alt}
          loading="lazy"
        ></img>
      </Link>
    </div>
  );
}

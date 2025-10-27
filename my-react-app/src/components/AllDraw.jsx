import {Link} from "react-router-dom";

export default function AllDraw({src, alt, id}) {
  return (
    <div className="Position ">
      <Link to={`/PageExpo/${id}`}>
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

import {Link} from "react-router-dom";
import SmartImage from "./SmartImage";

export default function AllDraw({src, alt, id, item}) {
  return (
    <div className="Position ">
      <Link to={`/PageExpo/${id}`}>
       <SmartImage
          item={item}
          size="medium"
          className="img-position"
        />
        <SmartImage
          item={item}
          size="medium"
          className="backgroundTest"
        />
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import "../assets/AnimationText/AnimationText.scss";

export default function LinkToiles({to}) {
  return (
    <>
      <div className="link-gallery">
        <Link to={to}>
          <span className="key">V</span>
          <span className="key">o</span>
          <span className="key">i</span>
          <span className="key">r</span>
          <span className="key"> </span>
          <span className="key">P</span>
          <span className="key">l</span>
          <span className="key">u</span>
          <span className="key">s</span>
          <span className="key">.</span>
          <span className="key">.</span>
        </Link>
      </div>
    </>
  );
}

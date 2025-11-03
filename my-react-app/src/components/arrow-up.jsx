import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

export default function ArrowUp() {
  const [visible, setVisible] = useState(false);
      useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // position actuelle du scroll
      const halfway = document.body.scrollHeight / 4; // la moitié de la page
      setVisible(scrollTop > halfway); // la flèche s’affiche à mi-page
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    visible && (
    <span
      className="top-anchor"
      id="top-anchor"
      onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
    >
      <FontAwesomeIcon icon={faAngleUp} className="arrow-up" />{" "}
    </span>
    )
  );
}

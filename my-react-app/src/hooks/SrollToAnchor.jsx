import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor() {
  const { pathname, hash } = useLocation(); // Récupère le chemin et le hash de l'URL

  useEffect(() => {
    if (hash) {
       // Si un hash est présent dans l'URL, on scroll vers l'élément correspondant
      // requestAnimationFrame verifie que le DOM est complètement charger avant le scroll
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      // Si pas de hash, on scroll simplement en haut de la page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToAnchor;

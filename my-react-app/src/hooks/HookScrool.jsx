import { useEffect } from "react";

export default function useFadeInOnScroll() {
  useEffect(() => {
    // Création de l'observer qui surveille les intersections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si l'élément est visible dans la fenêtre
          if (entry.isIntersecting) {
            // On ajoute la classe "visible" pour déclencher l'animation
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // L'élément est considéré visible dès qu'au moins 10% est affiché
    );
    const elements = document.querySelectorAll(".fade-in");

    // On observe chaque élément pour détecter son apparition dans la fenêtre
    elements.forEach((el) => observer.observe(el));

    // Nettoyage : on arrête l'observation quand le composant est démonté
    return () => observer.disconnect();
  }, []);
}

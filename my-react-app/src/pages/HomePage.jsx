import "../assets/style.css";
import "../assets/homePage/homePage.css";
import Me from "../components/Me.jsx";
import dataPro from "../assets/data/GalleryProjet.json";
import Projet from "../components/Projet.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import useFadeInOnScroll from "../components/HookScrool.jsx";

export default function HomePage() {
  useFadeInOnScroll();
  const presentation = dataPro.filter((item) => item.type === "presentation");
  const realisation = dataPro.filter((item) => item.type === "realisation");
  const skills = dataPro.filter((item) => item.type === "Skills");
  return (
    <>
      <main>
        {presentation.map((item) => (
          <Me
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            src={item.src}
            introduction={item.introduction}
            sousintroduction={item.sousintroduction}
            image={item.image}
          />
        ))}
          <section className="card-section .fade-in">
            {realisation.map((item) => (
              <Projet
                key={item.id}
                src={item.src}
                title={item.title}
                alt={item.title}
              />
            ))}
        </section>
        {skills.map((item) => (
          <Skills source="pro" key={item.id} title={item.title} />
        ))}
        <Contact />
      </main>
    </>
  );
}

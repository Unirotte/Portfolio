import {Suspense} from "react";
import dataPro from "../assets/data/gallery-projet.json";
import { Me, Projet, Skills, Contact, useFadeInOnScroll } from "../components/index-components";

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
          <Suspense fallback={<div>Chargement des projets..</div>}>
            {realisation.map((item) => (
              <Projet
                key={item.id}
                src={item.src}
                title={item.title}
                alt={item.title}
                React={item.React}
                skill={item.skill}
                className="cardskills"
              />
            ))}
          </Suspense>
        </section>
        {skills.map((item) => (
          <Skills source="pro" key={item.id} title={item.title} />
        ))}
        <Suspense fallback={<div>Chargement de contact..</div>}>
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

import dataPro from "../assets/data/gallery-projet.json";
import {
  Me,
  Projet,
  Skills,
  Contact,
  useFadeInOnScroll,
  ScrollUp,
} from "../components/IndexComponents";

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
            variant="hand-move"
          />
        ))}
        <div className="position-titre">
          <h2 className="title-projet">Projets Intégrateur WEB</h2>
        </div>
        <section className="card-section fade-in">
          {realisation.map((item) => (
            <Projet
              key={item.id}
              src={item.src}
              title={item.title}
              alt={item.title}
              Github={item.Github}
              skill={item.skill}
              className="cardskills"
            />
          ))}
        </section>
        {skills.map((item) => (
          <Skills source="pro" key={item.id} title={item.title} />
        ))}{" "}
        <ScrollUp />
        <Contact />
      </main>
    </>
  );
}

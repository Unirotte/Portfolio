import { useParams } from "react-router-dom";
import SkillsDynamic from "../components/SkillsDynamic.jsx";
import dataPro from "../assets/data/gallery-projet.json";
import dataCreatif from "../assets/data/gallery-draw.json";
import { ScrollUp } from "../components/IndexComponents.jsx";

export default function SkillsDynamicPage() {
  const { type } = useParams(); // "web" ou "creatif"

  let title = "";
  let data = [];

  if (type === "web") {
    title = "Skills Intégrateur Web";
    data = dataPro.filter(
      (item) =>
        item.type === "Skills-Outil" ||
        item.type === "Skills-Front" ||
        item.type === "Skills-Back"
    );
  } else if (type === "creatif") {
    title = "Skills Créatif";
    data = dataCreatif.filter(
      (item) => item.type === "SkillsManuels" || item.type === "Skills"
    );
  } else {
    return <p>Page non trouvée</p>;
  }

  return (
    <main>
      <SkillsDynamic title={title} data={data} />
      <ScrollUp />
    </main>
  );
}

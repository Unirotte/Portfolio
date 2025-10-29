import {useParams} from "react-router-dom";
import dataDraw from "../assets/data/gallery-draw.json";
import ExpoDrawing from "../components/ExpoDrawing";

export default function PageExpo() {
  const {id} = useParams();
  const drawing = dataDraw.find((item) => item.id === parseInt(id));

  if (!drawing) {
    return <p>Dessin introuvable 😢</p>;
  }

  return (
    <main>
      <ExpoDrawing item={drawing} musicId={drawing.song} />
    </main>
  );
}

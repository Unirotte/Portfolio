import {useParams} from "react-router-dom";
import dataDraw from "../assets/data/GalleryDraw.json";
import Drawing from "../components/Drawing";
import "../assets/Drawing/Drawing.css";

export default function GalleryPage() {
     const {id} = useParams();
     console.log(id);
    const drawing = dataDraw.find((item) => item.id === parseInt(id));

  if (!drawing) {
    return <p>Dessin introuvable 😢</p>;
  }

  return (
    <main>
    <Drawing 
    picture={drawing.src} 
    description={drawing.text} 
    title={drawing.title}
    musicId={drawing.song}
    />
    </main>
  );
}
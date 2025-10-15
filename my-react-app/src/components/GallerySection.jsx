import Gallery from "./Gallery";
import "../assets/Gallery/Gallery.scss";

export default function GallerySection({realisation, title}) {
  return (
    <section className="Dessin">
      <h2 className="titleGallery fade-in">{title}</h2>
        <div className="row">
          {realisation.slice(-4).map((item) => (
            <Gallery key={item.id} src={item.src} alt={item.title} />
          ))}
        </div>
    </section>
  );
}

import Gallery from "./Gallery";

export default function GallerySection({realisation, title, soustitle, alt}) {
  return (
    <section className="Dessin ">
      <h2 className="titleGallery fade-in">{title}</h2>
      <h3 className="sous-titre fade-in">{soustitle}</h3>
        <div className="row">
          {realisation.slice(0, 4).map((item) => (
            <Gallery key={item.id} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>
    </section>
  );
}

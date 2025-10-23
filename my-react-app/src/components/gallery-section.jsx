import Gallery from "./gallery";

export default function GallerySection({realisation, title, soustitle}) {
  return (
    <section className="Dessin">
      <h2 className="titleGallery fade-in">{title}</h2>
      <h3 className="sous-titre fade-in">{soustitle}</h3>
        <div className="row">
          {realisation.slice(-4).map((item) => (
            <Gallery key={item.id} src={item.src} alt={item.title} loading="lazy" />
          ))}
        </div>
    </section>
  );
}

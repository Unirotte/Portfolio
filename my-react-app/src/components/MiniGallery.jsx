import SmartImage from "./SmartImage";

export default function MiniGallery({realisation, title, soustitle}) {
  return (
    <section className="Dessin ">
      <h2 className="titleGallery fade-in">{title}</h2>
      <h3 className="sous-titre fade-in">{soustitle}</h3>
      <div className="row">
        {realisation.slice(0, 4).map((item) => (
          <SmartImage
            key={item.id}
            item={item}
            size="small"
          />
        ))}
      </div>
    </section>
  );
}

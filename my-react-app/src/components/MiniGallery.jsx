import SmartImage from "./SmartImage";

export default function MiniGallery({realisation, title, soustitle}) {
  return (
    <>
      <div className="position-titre">
        <h3 className="titleGallery fade-in">{title}</h3>
      </div>
      <section className="Dessin ">
        <h4 className="sous-titre fade-in">{soustitle}</h4>
        <div className="row">
          {realisation.slice(0, 4).map((item) => (
            <SmartImage key={item.id} item={item} size="small" />
          ))}
        </div>
      </section>
    </>
  );
}

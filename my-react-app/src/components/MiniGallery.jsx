export default function MiniGallery({realisation, title, soustitle}) {
  return (
    <section className="Dessin ">
      <h2 className="titleGallery fade-in">{title}</h2>
      <h3 className="sous-titre fade-in">{soustitle}</h3>
        <div className="row">
          {realisation.slice(0, 4).map((item) => (
            <img key={item.id} src={item.src} alt={item.alt} loading="lazy" />
          ))}
        </div>
    </section>
  );
}

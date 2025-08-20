import "../assets/Gallery/Gallery.scss";

export default function Gallery({src, title, alt}) {
  return (
    
    <div className="column">
        <div className="row">
          <img className="imgGallery" src={src} alt={alt}></img>
        </div>
      </div>
  );
}

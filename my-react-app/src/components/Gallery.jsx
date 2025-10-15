import "../assets/Gallery/Gallery.scss";

export default function Gallery({src, alt}) {
  return <img className="imgGallery" src={src} alt={alt}></img>;
  
}

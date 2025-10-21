export default function Gallery({src, alt}) {
  return <img className="imgGallery" src={src} alt={alt} loading="lazy"></img>;
  
}

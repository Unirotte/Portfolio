import "../assets/Projet/Projet.scss";

export default function Gallery({src, title, alt}) {
  return (
<>
<div className="card fade-in">
  <img className="imgCards" src={src} alt={title}></img>
  <div className="card-body">
    <h3 className="card-title">{title}</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
  );
}

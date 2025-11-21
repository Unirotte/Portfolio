export default function SmartImage({
  item,
  size = "medium",
  className = "",
  thumbOnly = false,
  ...props
}) {
  if (!item) return null;

  // Choisit l'image selon la taille demandée
  const src =
    size === "small"
      ? item.srcSmall
      : size === "large"
      ? item.srcLarge
      : item.srcMedium;

  // si thumbOnly → pas de srcSet, pas de sizes
  if (thumbOnly) {
    return (
      <img
        src={item.srcSmall}
        alt={item.alt}
        loading="lazy"
        className={`smart-image ${className}`}
        {...props}
      />
    );
  }
  // Définit la taille de l'image selon la largeur de l'écran et le type demandé
  const sizes =
    size === "small"
      ? "(max-width: 768px) 35vw, 352px"
      : size === "large"
      ? "(max-width: 768px) 600px, 1000px"
      : "(max-width: 768px) 280px, 350px";

  return (
    <img
      src={src}
      srcSet={`${item.srcSmall} 300w, ${item.srcMedium} 600w, ${item.srcLarge} 1000w`}
      sizes={sizes}
      alt={item.alt}
      loading="lazy"
      className={`smart-image ${className}`}
      {...props}
    />
  );
}

export default function SmartImage({
  item,
  size = "medium",
  className = "",
  ...props
}) {
  if (!item) return null;

  // 📏 Choisit la bonne taille selon la prop "size"
  const src =
    size === "small"
      ? item.srcSmall
      : size === "large"
      ? item.srcLarge
      : item.srcMedium;

  // 📐 Définit la taille responsive
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

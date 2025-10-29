export default function SmartImage({
  item,
  size = "medium",
  className = "",
  showGif = false,
  ...props
}) {
  if (!item) return null;

  const src =
    size === "small"
      ? item.srcSmall
      : size === "large"
      ? item.srcLarge
      : item.srcMedium;

  const gifSrc = item.srcLarge?.replace(".webp", ".gif");
  const isGif = showGif && gifSrc && gifSrc !== item.srcLarge;

  const sizes =
    size === "small"
      ? "(max-width: 400px) 158px, 353px"
      : size === "large"
      ? "(max-width: 768px) 600px, 1000px"
      : "(max-width: 400px) 157px, 280px";

  return (
    <img
      src={isGif ? gifSrc : src}
      srcSet={`${item.srcSmall} 300w, ${item.srcMedium} 600w, ${item.srcLarge} 1000w`}
      sizes={sizes}
      width={item.width}    
      height={item.height}  
      alt={item.alt}
      loading="lazy"
      className={`smart-image ${className}`}
      {...props}
    />
  );
}

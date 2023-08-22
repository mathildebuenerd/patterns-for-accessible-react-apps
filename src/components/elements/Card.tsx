interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
}

import styles from "./Card.module.css";

export default function Card({
  title = "Title",
  description = "Description",
  imageSrc,
}: Props) {
  const descriptionClassName = description
    ? `type-${description}-bg-color`
    : "";
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <article className={styles.container}>
      {imageSrc ? (
        <img
          src={imageSrc}
          className={`${descriptionClassName} ${styles.placeholdersImage}`}
          alt=""
        />
      ) : (
        <div className={styles.placeholdersImage}></div>
      )}
      <h3 className={styles.title}>{capitalizedTitle}</h3>
      <p>{description}</p>
    </article>
  );
}

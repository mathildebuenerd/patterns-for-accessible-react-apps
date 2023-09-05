interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  primaryAction?: Action;
}

interface Action {
  label: string;
  onClick: () => void;
}

import Button from "./Button";
import styles from "./Card.module.css";

export default function Card({
  title = "Title",
  description = "Description",
  imageSrc,
  primaryAction,
}: Props) {
  const descriptionClassName = description
    ? `type-${description}-bg-color`
    : "";
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const primaryActionMarkup = primaryAction ? (
    <Button onClick={primaryAction.onClick}>{primaryAction.label}</Button>
  ) : null;

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
      {primaryActionMarkup}
    </article>
  );
}

interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
  primaryAction?: JSX.Element;
  badge?: Badge;
}

interface Action {
  label: string;
  onClick: () => void;
}

interface Badge {
  label: string;
  imageSrc: string;
}

import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({
  title = "Title",
  description = "Description",
  imageSrc,
  primaryAction,
  badge,
}: Props) {
  const descriptionClassName = description
    ? `type-${description}-bg-color`
    : "";
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

  const primaryActionMarkup = primaryAction ? primaryAction : null;

  const badgeMarkup = badge ? (
    <div className={styles.badge}>
      <Image className={styles.badgeImage} src={badge.imageSrc} alt="" />
      <span>{badge.label}</span>
    </div>
  ) : null;

  return (
    <article className={styles.container}>
      {badgeMarkup}
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
      <p className={styles.description}>{description}</p>
      {primaryActionMarkup}
    </article>
  );
}

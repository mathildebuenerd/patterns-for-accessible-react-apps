import Image from "next/image";
import styles from "./Card.module.css";

interface Props {
  title: string;
  description: string;
  imageSrc: string;
  primaryAction?: JSX.Element;
  badge?: Badge;
}

interface Badge {
  label: string;
  imageSrc: string;
}

export default function Card({
  title,
  description,
  imageSrc,
  primaryAction,
  badge,
}: Props) {
  const badgeMarkup = badge ? (
    <div className={styles.badge}>
      <Image className={styles.badgeImage} src={badge.imageSrc} alt="" />
      <span>{badge.label}</span>
    </div>
  ) : null;

  const descriptionMarkup = (
    <p className={`${styles.description} type-${description}-bg-color`}>
      {description}
    </p>
  );

  const primaryActionMarkup = primaryAction ? primaryAction : null;

  // eslint-disable-next-line @next/next/no-img-element
  const imageMarkup = <img src={imageSrc} className={styles.image} alt="" />;

  return (
    <article className={styles.container}>
      {badgeMarkup}
      {imageMarkup}
      <h3 className={styles.title}>{formatTitle(title)}</h3>
      {descriptionMarkup}
      {primaryActionMarkup}
    </article>
  );
}

function formatTitle(title: string = "") {
  return title.charAt(0).toUpperCase() + title.slice(1);
}

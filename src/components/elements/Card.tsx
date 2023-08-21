const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    width: "220px",
    boxShadow: "0px 3px 10px lightgrey",
    borderRadius: "5px",
    margin: "0 20px 20px 0",
  },
  placeholders: {
    image: {
      width: "100%",
      height: "200px",
      objectFit: "none",
    },
  },
  title: {
    marginTop: "5px",
    fontWeight: 500,
    fontSize: "1.3em",
  },
};

interface Props {
  title?: string;
  description?: string;
  imageSrc?: string;
}

export default function Card({
  title = "Title",
  description = "Description",
  imageSrc,
}: Props) {
  const classname = description ? `type-${description}-bg-color` : "";
  const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <article style={styles.container}>
      {imageSrc ? (
        <img
          className={classname}
          style={styles.placeholders.image}
          src={imageSrc}
          alt=""
        />
      ) : (
        <div style={styles.placeholders.image}></div>
      )}
      <h3 style={styles.title}>{capitalizedTitle}</h3>
      <p>{description}</p>
    </article>
  );
}

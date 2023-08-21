const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    width: "300px",
    boxShadow: "0px 3px 10px lightgrey",
    borderRadius: "5px",
    margin: "0 20px 20px 0",
  },
  placeholders: {
    image: {
      width: "100%",
      height: "200px",
      backgroundColor: "var(--background-color-layout)",
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
  return (
    <article style={styles.container}>
      {imageSrc ? (
        <img style={styles.placeholders.image} src={imageSrc} alt="" />
      ) : (
        <div style={styles.placeholders.image}></div>
      )}
      <h3 style={styles.title}>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

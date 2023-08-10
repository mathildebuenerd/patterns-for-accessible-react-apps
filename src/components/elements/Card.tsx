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
    },
  },
  title: {
    marginTop: "5px",
    fontWeight: 500,
    fontSize: "1.3em",
  },
};

export default function Card() {
  return (
    <article style={styles.container}>
      <div style={styles.placeholders.image}></div>
      <h3 style={styles.title}>Title</h3>
      <p></p>
    </article>
  );
}

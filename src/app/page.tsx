import Image from "next/image";
// import styles from "./page.module.css";
import Page from "@/components/foundations/Page";
import Card from "@/components/elements/Card";

const styles = {
  section: {
    marginBottom: "10px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  heading: {
    marginBottom: "20px",
  },
};

export default function Home() {
  return (
    <Page title="Home">
      <section style={styles.section}>
        <h2 style={styles.heading}>Most popular</h2>
        <div style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>Added recently</h2>
        <div style={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Page>
  );
}

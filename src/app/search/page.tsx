import Card from "@/components/elements/Card";
import Page from "@/components/foundations/Page";

const styles = {
  section: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function Search() {
  return (
    <Page title="Search">
      <section style={styles.section}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </Page>
  );
}

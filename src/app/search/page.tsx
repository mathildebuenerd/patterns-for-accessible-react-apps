"use client";

import Card from "@/components/elements/Card";
import Page from "@/components/foundations/Page";
import { useSearchParams } from "next/navigation";

const styles = {
  section: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function Search() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const title = searchQuery ? `Search for "${searchQuery}"` : "Search";
  return (
    <Page title={title}>
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

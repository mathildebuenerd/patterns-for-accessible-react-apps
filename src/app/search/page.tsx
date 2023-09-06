"use client";

import Card from "@/component_library/Card";
import Page from "@/components/foundations/Page";
import { useSearchParams } from "next/navigation";

import styles from "./page.module.css";
import { useSearchByName } from "@/api/hooks/usePokeAPI";

export default function Search() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { pokemons } = useSearchByName(searchQuery);

  return (
    <Page title={`Search for "${searchQuery || ""}"`}>
      <section className={styles.section}>
        <>
          {pokemons
            ? pokemons.map((pokemon, index) => (
                <Card
                  key={pokemon.name + index}
                  title={pokemon.name}
                  description={pokemon.type}
                  imageSrc={pokemon.image}
                />
              ))
            : null}
        </>
      </section>
    </Page>
  );
}

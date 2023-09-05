"use client";

import * as PokeAPI from "@/api/methods";
import Card from "@/component_library/Card";
import Page from "@/components/foundations/Page";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

interface Pokemon {
  name: string;
  type: string;
  image: string;
}

export default function Search() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    async function getPokemons() {
      const response = await PokeAPI.getData({ query: searchQuery });

      const parsedCards = response.reduce((acc: Pokemon[], card) => {
        acc.push({
          name: card.name,
          type: card.types[0].type.name,
          image: card.sprites.front_default,
        });
        return acc;
      }, []);

      setPokemons(parsedCards);
    }

    getPokemons();
  }, [searchQuery]);

  const placeholder = (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );

  const title = searchQuery ? `Search for "${searchQuery}"` : "Search";
  return (
    <Page title={title}>
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
            : placeholder}
        </>
      </section>
    </Page>
  );
}

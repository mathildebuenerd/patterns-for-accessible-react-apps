"use client";

import pokemonList from "../../../database/pokemon-list-251.json" assert { type: "json" };
import Card from "@/components/elements/Card";
import Page from "@/components/foundations/Page";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const styles = {
  section: {
    display: "flex",
    flexWrap: "wrap",
  },
};

const DEFAULT_LIMIT = 9;

function search({ query }: { query: string | null }) {
  return pokemonList.results.filter((pokemon) =>
    pokemon.name.includes(query || ""),
  );
}

function getData({
  query,
  limit = DEFAULT_LIMIT,
}: {
  query: string | null;
  limit?: number;
}) {
  const results = search({ query });

  // Keep only results within limit
  const displayedResults = results.slice(0, limit);

  return Promise.all(
    displayedResults.map((result) => {
      const fetchUrl = new URL("", result.url);

      const promise = fetch(fetchUrl);

      return promise
        .then((response) => {
          if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
          }

          return response.json();
        })
        .then((data) => data)
        .catch(() => {
          throw new Error("Error while fetching data");
        });
    }),
  );
}

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
      const response = await getData({ query: searchQuery });

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
      <section style={styles.section}>
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

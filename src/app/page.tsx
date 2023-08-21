"use client";

import * as PokeAPI from "@/api/methods";
import { useEffect, useState } from "react";

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
  const [favourites, setFavourites] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    async function getPokemons() {
      const response = await PokeAPI.getFavourites();
      console.log({ response });

      const parsedCards = response.reduce((acc: Pokemon[], card) => {
        acc.push({
          name: card.name,
          type: card.types[0].type.name,
          image: card.sprites.front_default,
        });
        return acc;
      }, []);

      setFavourites(parsedCards);
    }
    getPokemons();
  }, []);

  const placeholder = (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );

  return (
    <Page title="Home">
      <section style={styles.section}>
        <h2 style={styles.heading}>My favourites</h2>
        <div style={styles.cardContainer}>
          {favourites
            ? favourites.map((pokemon, index) => (
                <Card
                  key={pokemon.name + index}
                  title={pokemon.name}
                  description={pokemon.type}
                  imageSrc={pokemon.image}
                />
              ))
            : placeholder}
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

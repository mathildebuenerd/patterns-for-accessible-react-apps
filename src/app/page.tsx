"use client";

import * as PokeAPI from "@/api/methods";
import { useEffect, useState } from "react";

import Image from "next/image";
import Page from "@/components/foundations/Page";
import Card from "@/components/elements/Card";

import styles from "./page.module.css";

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
      <section className={styles.section}>
        <h2 className={styles.heading}>My favourites</h2>
        <div className={styles.cardContainer}>
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
      <section className={styles.section}>
        <h2 className={styles.heading}>Added recently</h2>
        <div className={styles.cardContainer}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </Page>
  );
}

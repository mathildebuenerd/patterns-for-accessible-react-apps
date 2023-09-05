"use client";

import * as PokeAPI from "@/api/methods";
import { useEffect, useState } from "react";

import Page from "@/components/foundations/Page";
import Card from "@/component_library/Card";

import styles from "./page.module.css";
import { PokemonCard } from "@/types/pokemon";

function parsedCards(response: PokeAPIPokemon[]): PokemonCard[] {
  console.log({ response });
  return response.reduce((acc: PokemonCard[], card) => {
    acc.push({
      name: card.name,
      type: card.types[0].type.name,
      image: card.sprites.front_default,
    });
    return acc;
  }, []);
}

export default function Home() {
  const [capturedList, setCapturedList] = useState<PokemonCard[] | null>(null);
  const [notCapturedList, setNotCapturedList] = useState<PokemonCard[] | null>(
    null,
  );

  useEffect(() => {
    async function getPokemons() {
      const captured = await PokeAPI.getCaptured();
      const parsedCaptured = parsedCards(captured);
      setCapturedList(parsedCaptured);

      const notCaptured = await PokeAPI.getNotCaptured();
      const parsedNotCaptured = parsedCards(notCaptured);
      setNotCapturedList(parsedNotCaptured);
    }

    getPokemons();
  }, []);

  const handleCapture = (pokemonName: string) => {
    PokeAPI.setCaptured(pokemonName);

    const newCapturedList = [
      ...(capturedList && capturedList),
      notCapturedList?.find((pokemon) => pokemon.name === pokemonName),
    ];

    setCapturedList(newCapturedList);

    const newNotCapturedList = notCapturedList?.filter(
      (pokemon) => pokemon.name !== pokemonName,
    );

    setNotCapturedList(newNotCapturedList);
  };

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
        <h2 className={styles.heading}>Captured</h2>
        <div className={styles.cardContainer}>
          {capturedList
            ? capturedList.map((pokemon, index) => (
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
        <h2 className={styles.heading}>Free</h2>
        <div className={styles.cardContainer}>
          {notCapturedList
            ? notCapturedList.map((pokemon, index) => (
                <Card
                  key={pokemon.name + index}
                  title={pokemon.name}
                  description={pokemon.type}
                  imageSrc={pokemon.image}
                  primaryAction={{
                    label: "Capture",
                    onClick: () => handleCapture(pokemon.name),
                  }}
                />
              ))
            : placeholder}
        </div>
      </section>
    </Page>
  );
}

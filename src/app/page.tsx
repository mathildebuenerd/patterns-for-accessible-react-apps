"use client";

import * as PokeAPI from "@/api/methods";
import { useEffect, useState } from "react";
import iconPokeball from "@/assets/icon-pokeball.svg";

import Page from "@/components/foundations/Page";
import Card from "@/component_library/Card";

import styles from "./page.module.css";
import { PokemonCard } from "@/types/pokemon";
import Button from "@/component_library/Button";

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
    <Page title="Pokémon list">
      <section className={styles.section}>
        <h2 className={styles.heading}>Captured</h2>
        <div className={`${styles.cardContainer} ${styles.captured}`}>
          {capturedList
            ? capturedList.map((pokemon, index) => (
                <Card
                  key={pokemon.name + index}
                  title={pokemon.name}
                  description={pokemon.type}
                  imageSrc={pokemon.image}
                  badge={{
                    label: "Captured",
                    imageSrc: iconPokeball,
                  }}
                />
              ))
            : placeholder}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>Not captured</h2>
        <div className={styles.cardContainer}>
          {notCapturedList
            ? notCapturedList.map((pokemon, index) => (
                <Card
                  key={pokemon.name + index}
                  title={pokemon.name}
                  description={pokemon.type}
                  imageSrc={pokemon.image}
                  primaryAction={
                    <Button onClick={() => handleCapture(pokemon.name)}>
                      Capture
                    </Button>
                  }
                />
              ))
            : placeholder}
        </div>
      </section>
    </Page>
  );
}

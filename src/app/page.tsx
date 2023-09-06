"use client";

import * as PokeAPI from "@/api/methods";
import iconPokeball from "@/assets/icon-pokeball.svg";

import Page from "@/components/foundations/Page";
import Card from "@/component_library/Card";

import styles from "./page.module.css";
import Button from "@/component_library/Button";
import { useLists } from "@/api/hooks/usePokeAPI";
import { useAriaLiveRegion } from "@/components/foundations/AriaLiveRegion/useAriaLiveRegion";
import { AriaLiveRegionContextProvider } from "@/components/foundations/AriaLiveRegion/context";

export default function Home() {
  return (
    <AriaLiveRegionContextProvider>
      <HomeContent />
    </AriaLiveRegionContextProvider>
  );
}

function HomeContent() {
  const { capturedList, setCapturedList, notCapturedList, setNotCapturedList } =
    useLists();
  const { setText } = useAriaLiveRegion();

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

    announceStatus(pokemonName);
  };

  const announceStatus = (pokemonName: string) => {
    setText(`${pokemonName} just got captured!`);
  };

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
            : null}
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
            : null}
        </div>
      </section>
    </Page>
  );
}

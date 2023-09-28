"use client";

import iconPokeball from "@/assets/icon-pokeball.svg";

import Page from "@/components/foundations/Page";
import Card from "@/component_library/Card";

import styles from "./page.module.css";
import Button from "@/component_library/Button";
import { AriaLiveRegionContextProvider } from "@/components/foundations/AriaLiveRegion/context";
import { useCapture } from "./hooks/useCapture";

export default function Home() {
  return (
    <AriaLiveRegionContextProvider>
      <HomeContent />
    </AriaLiveRegionContextProvider>
  );
}

function HomeContent() {
  const { handleCapture, capturedList, notCapturedList } = useCapture();

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
                    <Button
                      onClick={() => handleCapture(pokemon.name)}
                      ariaAttributes={{
                        "aria-label": `Capture ${pokemon.name}`,
                      }}
                    >
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

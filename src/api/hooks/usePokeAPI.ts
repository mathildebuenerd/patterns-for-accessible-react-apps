import { useEffect, useState } from "react";
import * as PokeAPI from "@/api/methods";
import { PokemonCard } from "@/types/pokemon";

export function useLists() {
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

  return {
    capturedList,
    setCapturedList,
    notCapturedList,
    setNotCapturedList,
  };
}

export function useSearchByName(searchQuery: string | null) {
  const [pokemons, setPokemons] = useState<PokemonCard[] | null>(null);

  useEffect(() => {
    async function getPokemons() {
      const response = await PokeAPI.getData({ query: searchQuery });

      const parsedCards = response.reduce((acc: PokemonCard[], card) => {
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

  return {
    pokemons,
  };
}

// Utilities

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

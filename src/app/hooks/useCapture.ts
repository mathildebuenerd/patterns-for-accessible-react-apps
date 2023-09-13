import * as PokeAPI from "@/api/methods";

import { useLists } from "@/api/hooks/usePokeAPI";
import { useAriaLiveRegion } from "@/components/foundations/AriaLiveRegion/useAriaLiveRegion";

export function useCapture() {
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

  return { handleCapture, capturedList, notCapturedList };
}

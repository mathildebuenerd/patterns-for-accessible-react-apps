import { useContext } from "react";
import { AriaLiveRegionContext } from "./context";

export function useAriaLiveRegion() {
  return useContext(AriaLiveRegionContext);
}

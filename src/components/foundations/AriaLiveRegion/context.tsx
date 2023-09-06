import { PropsWithChildren, createContext, useMemo, useState } from "react";

export const AriaLiveRegionContext = createContext({
  text: "",
  setText: (text: string) => {},
});

export function AriaLiveRegionContextProvider({ children }: PropsWithChildren) {
  const [text, setText] = useState<string>("");

  const memoizedValue = useMemo(
    () => ({
      text,
      setText,
    }),
    [text],
  );

  return (
    <AriaLiveRegionContext.Provider value={memoizedValue}>
      {children}
    </AriaLiveRegionContext.Provider>
  );
}

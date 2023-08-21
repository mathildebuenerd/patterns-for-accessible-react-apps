import pokemonList from "../../database/pokemon-list-251.json" assert { type: "json" };

export const DEFAULT_LIMIT = 9;

export function search({ query }: { query: string | null }) {
  return pokemonList.results.filter((pokemon) =>
    pokemon.name.includes(query || ""),
  );
}

export function getData({
  query,
  limit = DEFAULT_LIMIT,
}: {
  query: string | null;
  limit?: number;
}) {
  const results = search({ query });

  // Keep only results within limit
  const displayedResults = results.slice(0, limit);

  return Promise.all(
    displayedResults.map((result) => {
      const fetchUrl = new URL("", result.url);

      const promise = fetch(fetchUrl);

      return promise
        .then((response) => {
          if (!response.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
          }

          return response.json();
        })
        .then((data) => data)
        .catch(() => {
          throw new Error("Error while fetching data");
        });
    }),
  );
}
